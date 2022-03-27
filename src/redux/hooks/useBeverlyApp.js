import { useReducer } from 'react';
import GlobalReducer from '../store/BeverlyReducer';
import useWindowsSizeEffect from "../effects/useWindowsSizeEffect";
import useLoadAgendasEffect from "../effects/useLoadAgendasEffect";
import useLoadChartPieffect from "../effects/useLoadChartPieEffect";
import useLoadChartBarEffect from "../effects/useLoadChartBarEffect";
import useSetActiveWeekDayEffect from "../effects/useSetActiveWeekDayEffect";
import useRedirectLoginEffect from "../effects/useRedirectLoginEffect";
import useUpdateHeaderRefEffect from "../effects/useUpdateHeaderRefEffect";
import { withHttpWrapper } from "../../api/HttpAuthWrapper";
import { createAppointment, updateAppointment, deleteAppointment } from "../../api/ApiController";

export default function useBeverlyApp(initialState) {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  useWindowsSizeEffect({
    dispatch
  });
  useSetActiveWeekDayEffect({
    selectedDate: state.selectedDate,
    dispatch
  });
  useLoadAgendasEffect({
    selectedDate: state.selectedDate,
    accessToken: state.accessToken,
    dispatch,
  });
  useLoadChartPieffect({
    selectedDate: state.selectedDate,
    accessToken: state.accessToken,
    pie: state.pie,
    dispatch
  });
  useLoadChartBarEffect({
    selectedDate: state.selectedDate,
    bar: state.bar,
    accessToken: state.accessToken,
    dispatch
  });
  useRedirectLoginEffect({
    logout: state.logout,
    dispatch
  });
  useUpdateHeaderRefEffect({
    headerRef: state.headerRef,
    dispatch
  });

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
          agenda: "NATALIA",
          servicios: [{ nombre: "", valor: "" }],
          telefono: "+57 ",
          porcentaje: 50
        })
      })
    }

    if (appointment.id) {
      withHttpWrapper(
        updateAppointment([newAppointment, appointment.id, state.accessToken]),
        (response) => {
          cleanForm();
        },
        (response) => { },
        dispatch);
    } else {
      withHttpWrapper(
        createAppointment([newAppointment, state.accessToken]),
        (response) => {
          cleanForm();
        },
        (response) => { },
        dispatch);
    }
  }

  const onDelete = (cita, agendaId) => {
    withHttpWrapper(
      deleteAppointment([cita.id, state.accessToken]),
      (response) => { window.location.reload(); },
      (response) => { },
      dispatch);
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

  const setTelefono = (telefono, appointment) => {
    dispatch({
      type: "createForm",
      payload: Object.assign(appointment, { telefono })
    })
  }

  const setPorcentaje = (porcentaje, appointment) => {
    dispatch({
      type: "createForm",
      payload: Object.assign(appointment, { porcentaje })
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
      payload: Object.assign(appointment, { servicios: appointment.servicios.concat({}) })
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

  const setPhoneAvailable = (booleanValue) => {
    dispatch({
      type: "isPhoneAvailable",
      payload: booleanValue
    })
  }

  const setPercentageVisible = (booleanValue) => {
    dispatch({
      type: "isPercentageVisible",
      payload: booleanValue
    })
  }

  return {
    headerCtrl: {
      selectedDate: state.selectedDate,
      newAppointment: state.createForm,
      isModalVisible: state.showModal,
      headerHeight: state.headerHeight,
      updateFecha,
      handleShow,
      handleClose,
      onSaveAppointment,
      beverlyHeaderRef: state.headerRef,
      createFormCtrlPkg: {
        appointment: state.createForm,
        seledtedDate: state.selectedDate,
        isPhoneAvailable: state.isPhoneAvailable,
        isPercentageVisible: state.isPercentageVisible,
        updateFecha,
        onSaveAppointment,
        setAgenda,
        setClient,
        handleChangeServices,
        addService,
        removeService,
        setPhoneAvailable,
        setTelefono,
        setPercentageVisible,
        setPorcentaje,
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
      orientation: state.orientation,
      pie: state.pie,
      bar: state.bar,
    }
  }
}