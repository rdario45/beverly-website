
import { useReducer, useEffect, useState, useRef } from 'react';
import { globalReducer } from '../store'
import Agenda from "../components/Agenda"
import API from "../api"
import BasicDatePicker from '../components/DatePicker';
import { VscAdd } from "react-icons/vsc"

function AgendaScreen() {
    const [state, dispatch] = useReducer(globalReducer, { agendas: [] });
    const [selectedDate, handleDateChange] = useState(new Date());
    const fecha = new Date(selectedDate.toDateString()).getTime().toString()

    useEffect(() => {
        API.agendas(fecha).then((body) => {
            console.log("data", body)
            dispatch({
                type: "agendas",
                payload: body.data
            });
        });
    }, [fecha]);

    const onDelete = (agendaId, citaId) => {
        API.eliminarCita(citaId).then((body) => {            
            console.log("s.agendas", Object.assign([], state.agendas))
            dispatch({
                type: "agendas",
                payload: Object.assign([], state.agendas).map(agenda => {
                    if ( agenda.id === agendaId ) {
                        agenda.citas = agenda.citas.filter(cita => cita.id !== citaId);
                    }
                    return agenda;             
                })
            });
        });
    }

    return (
        <div style={{
            backgroundColor: "red"
        }}> Agenda:

            <BasicDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />

            {state.agendas.map((agenda, key) => {
                const date = new Date(parseInt(agenda.fecha));
                return (
                    <div key={key}>
                        <Agenda {...agenda} 
                        onDelete={onDelete}/>
                    </div>
                )
            })}

            <button style={{ width: "100%" }}><VscAdd /></button>

        </div>
    )
}

export default AgendaScreen;