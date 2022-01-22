import { useReducer } from 'react';
import { globalReducer } from '../store/index';
import API from "../api/index";

export default function useApp(initialState) {

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const handleClose = () => {
    dispatch({
      type: "show",
      payload: false
    })
  }

  const handleShow = () => {
    dispatch({
      type: "show",
      payload: true
    })
  }

  const onSave = (cita) => {
    const nuevaCita = Object.assign(cita, {
      hora: state.fecha.getTime().toString()
    })

    if (cita.id) {
      API.actualizarCita(nuevaCita, cita.id).then(body =>
        dispatch({
          type: "form",
          payload: Object.assign({
            cliente: "",
            agenda: "",
            servicios: [{ nombre: "", valor: "" }]
          })
        })
      );
    } else {
      API.guardarCita(nuevaCita).then(body =>
        dispatch({
          type: "form",
          payload: Object.assign({
            cliente: "",
            agenda: "",
            servicios: [{ nombre: "", valor: "" }]
          })
        })
      );
    }
  }

  const handleFecha = (fecha) => {
    dispatch({
      type: "fecha",
      payload: fecha
    });
  }

  const onDelete = (cita, agendaId) => {
    API.eliminarCita(cita.id).then((body) => {
      dispatch({
        type: "agendas",
        payload: Object.assign([], state.agendas).map(agenda => {
          if (agenda.id === agendaId) {
            agenda.citas = agenda.citas.filter(x => x.id !== cita.id);
          }
          return agenda;
        })
      });
    });
  }

  const onUpdate = (cita) => {
    dispatch({
      type: "form",
      payload: cita
    });
    handleShow();

    const newFecha = new Date(); // TODO refect
    newFecha.setTime(cita.hora);
    dispatch({
      type: "fecha",
      payload: newFecha
    });
  }

  const loadAgendas = (fecha) => {

    const calcWeekPeriod = (fecha) => {
      const startDate = new Date(fecha.toDateString());
      startDate.setDate(startDate.getDate() - fecha.getDay());
      const finalDate = new Date(startDate.toDateString());
      finalDate.setDate(startDate.getDate() + 6);
      return [startDate, finalDate];
    }
    const [startDate, finalDate] = calcWeekPeriod(fecha);

    API.agendasWeek(
      new Date(startDate.toDateString()).getTime().toString(),
      new Date(finalDate.toDateString()).getTime().toString()
    ).then((body) => {

      const buildWeekMap = (agendas) => {

        const bFilter = (agenda, offset) => {
          const selectedDate = new Date(fecha.toDateString());
          selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay() + offset);
          if (agenda.fecha === selectedDate.getTime().toString()) {
            return true;
          }
          return false;
        }

        return {
          lunes: agendas.filter(val => bFilter(val, 1)),
          martes: agendas.filter(val => bFilter(val, 2)),
          miercoles: agendas.filter(val => bFilter(val, 3)),
          jueves: agendas.filter(val => bFilter(val, 4)),
          viernes: agendas.filter(val => bFilter(val, 5)),
          sabado: agendas.filter(val => bFilter(val, 6)),
        }
      }

      const newWeek = buildWeekMap(body.data);

      dispatch({
        type: "week",
        payload: newWeek
      });

      dispatch({
        type: "activeDay",
        payload: new Date(fecha).getDay() > 0 ? new Date(fecha).getDay() - 1 : 0
      })

    });
  }

  const loadBalance = (fecha) => {

    const calcWeekPeriod = (fecha) => {
      const startDate = new Date(fecha.toDateString());
      startDate.setDate(startDate.getDate() - fecha.getDay());
      const finalDate = new Date(startDate.toDateString());
      finalDate.setDate(startDate.getDate() + 6);
      return [startDate, finalDate];
    }
    const [startDate, finalDate] = calcWeekPeriod(fecha);

    API.balanceWeek(
      new Date(startDate.toDateString()).getTime().toString(),
      new Date(finalDate.toDateString()).getTime().toString()
    ).then((body) => {

      dispatch({
        type: "balance",
        payload: body.data
      });

    });
  }

  const setCliente = (cliente, cita) => {
    dispatch({
      type: "form",
      payload: Object.assign(cita, { cliente })
    })
  }

  const setAgenda = (agenda, cita) => {
    dispatch({
      type: "form",
      payload: Object.assign(cita, { agenda })
    })
  }

  const handleChange = (attrib, key, value, cita) => {
    cita.servicios[key][attrib] = value;
    dispatch({
      type: "form",
      payload: Object.assign(cita, { servicios: cita.servicios })
    })
  }

  const moreServicios = (cita) => {
    dispatch({
      type: "form",
      payload: Object.assign(cita, { servicios: cita.servicios.concat({ nombre: "" }) })
    })
  }

  const lessServicios = (cita) => {
    cita.servicios.pop()
    dispatch({
      type: "form",
      payload: Object.assign(cita, { servicios: cita.servicios })
    })
  }

  const onSelect = (number) => { // TODO refect
    dispatch({
      type: "activeDay",
      payload: number
    })

    const newDate = new Date(state.fecha).getDate() - new Date(state.fecha).getDay() + number + 1;
    const newFecha = new Date(state.fecha).setDate(newDate);

    dispatch({
      type: "fecha",
      payload: new Date(newFecha)
    });

  }

  return [
    state,
    handleShow,
    handleClose,
    onSave,
    handleFecha,
    onDelete,
    onUpdate,
    loadAgendas,
    setCliente,
    setAgenda,
    handleChange,
    moreServicios,
    lessServicios,
    onSelect,
    loadBalance
  ]
}