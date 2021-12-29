
import { useEffect } from 'react';
import AgendaTable from "../components/AgendaTable"
import BasicDatePicker from '../components/DatePicker';
import API from "../api"
import { IoReload } from "react-icons/io5";

function AgendaScreen({ selectedDate, handleDateChange, onDelete, agendas, dispatch, onUpdate }) {
    const fecha = new Date(selectedDate.toDateString()).getTime().toString()

    useEffect(() => {
        API.agendas(fecha).then((body) => {
            dispatch({
                type: "agendas",
                payload: body.data
            });
        });
    }, [fecha]);

    return (
        <div style={{
            // backgroundColor: "red"
        }}>
            Agenda:
            <BasicDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
            <button>
                <IoReload />
            </button>

            {agendas.map((agenda, key) => {
                return (
                    <div key={key}>
                        <AgendaTable
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                            {...agenda}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default AgendaScreen;