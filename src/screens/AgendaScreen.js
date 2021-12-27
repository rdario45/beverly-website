
import { useEffect } from 'react';
import AgendaTable from "../components/AgendaTable"
import BasicDatePicker from '../components/DatePicker';
import API from "../api"
import { IoReload } from "react-icons/io5";
import { Button } from "react-bootstrap"

function AgendaScreen({ selectedDate, handleDateChange, onDelete, agendas, dispatch, onUpdate }) {
    const fecha = new Date(selectedDate.toDateString()).getTime().toString()

    useEffect(() => {
        API.agendas(fecha).then((body) => {
            // console.log("data", body)
            dispatch({
                type: "agendas",
                payload: body.data
            });
        });
    }, [fecha]);

    const onDeleteC = (agendaId, citaId) => {
        onDelete(agendaId, citaId);
    }
    const onUpdateC = (cita) => {
        onUpdate(cita);
    }

    return (
        <div style={{
            // backgroundColor: "red"
        }}> 
        Agenda:
        <BasicDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
        <button><IoReload/></button>
        <Button><IoReload/></Button>
        
            
            {agendas.map((agenda, key) => {
                return (
                    <div key={key}>
                        <AgendaTable
                            onDelete={onDeleteC}
                            onUpdate={onUpdateC}
                            {...agenda}
                        />
                    </div>
                )
            })}

        </div>
    )
}

export default AgendaScreen;