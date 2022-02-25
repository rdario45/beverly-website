import { useReducer } from 'react';
import GlobalReducer from '../store/BveverlyReducer';
// import useWindowsResize from "../effects/useWindowsResize";
import useLoadAgendas from "../effects/useLoadAgendas";
import useLoadBalance from "../effects/useLoadBalance";
import API from "../../api/ApiController";

export default function useBeverlyApp(initialState) {
  const [state, dispatch] = useReducer(GlobalReducer,  initialState);
  useLoadAgendas(state.selectedDate, dispatch);
  useLoadBalance(state.selectedDate, dispatch);

  // Header Controller
  const updateFecha = (fecha) => {
    dispatch({
      type: "selectedDate",
      payload: fecha
    });
  }

  const handleShow = () => {
    dispatch({
      type: "showModal",
      payload: true
    })
  }

  const handleClose = () => {
    dispatch({
      type: "showModal",
      payload: false
    })
  }

  const onSaveAppointment = (appointment) => {
    const newAppointment = Object.assign(appointment, {
      hora: state.selectedDate.getTime().toString()
    })

    const cleanForm = () => {
      dispatch({
        type: "createForm",
        payload: Object.assign({
          cliente: "",
          agenda: "",
          servicios: [{ nombre: "", valor: "" }]
        })
      })
    }

    if (appointment.id) {
      API.updateAppointment(newAppointment, appointment.id).then(body => cleanForm() );
    } else {
      API.createAppointment(newAppointment).then(body => cleanForm() );
    }
  }

  const onDelete = (cita, agendaId) => {
    API.deleteAppointment(cita.id).then((body) => {
      window.location.reload();
    });
  }

  const onUpdate = (appointment) => {
    handleShow();
    dispatch({
      type: "createForm",
      payload: appointment
    });
    const newFecha = new Date(state.selectedDate);
    newFecha.setTime(appointment.hora);
    dispatch({
      type: "selectedDate",
      payload: newFecha
    });
  }

  const setClient = (cliente, appointment) => {
    dispatch({
      type: "createForm",
      payload: Object.assign(appointment, { cliente })
    })
  }

  const setAgenda = (agenda, appointment) => {
    dispatch({
      type: "createForm",
      payload: Object.assign(appointment, { agenda })
    })
  }

  const handleChangeServices = (attrib, key, value, appointment) => {
    appointment.servicios[key][attrib] = value;
    dispatch({
      type: "createForm",
      payload: Object.assign(appointment, { servicios: appointment.servicios })
    })
  }

  const addService = (appointment) => {
    dispatch({
      type: "createForm",
      payload: Object.assign(appointment, { servicios: appointment.servicios.concat({})})
    })
  }

  const removeService = (appointment) => {
    appointment.servicios.pop()
    dispatch({
      type: "createForm",
      payload: Object.assign(appointment, { servicios: appointment.servicios })
    })
  }

  const onSelect = (number) => {
    dispatch({
      type: "activeDay",
      payload: number
    })
    const newDate = new Date(state.selectedDate).getDate() - new Date(state.selectedDate).getDay() + number + 1;
    const newFecha = new Date(state.selectedDate).setDate(newDate);
    dispatch({
      type: "selectedDate",
      payload: new Date(newFecha)
    });
  }


  return {
    headerCtrl: {
      beverlyHeaderRef: state.headerRef,
      selectedDate: state.selectedDate,
      newAppointment: state.createForm,
      isModalVisible: state.showModal,
      updateFecha,
      handleShow,
      handleClose,
      onSaveAppointment,
      createFormCtrlPkg:{
        seledtedDate: state.selectedDate,
        appointment: state.createForm,
        updateFecha,
        onSaveAppointment,
        setAgenda,
        setClient,
        handleChangeServices,
        addService,
        removeService
      }
    },
    agendasCtrl: {
      currentWeek: state.currentWeek,
      activeDay: state.activeDay,
      onDelete,
      onUpdate,
      onSelect,
    },
    balanceCtrl: {
      balance: state.balance
    }
  }
}