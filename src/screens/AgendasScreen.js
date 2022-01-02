
import { useEffect } from 'react';
import { Row } from "react-bootstrap";
import AgendaTable from "../components/AgendaTable"
import API from "../api"

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
            textAlign: "center"
        }}>
        
        <br/>
            {agendas.filter(agenda => agenda.citas.length > 0).map((agenda, key) => {
                return (
                    <Row key={key}  style={{
                            padding: "0px 20px",
                        }}>
                        <div style={{
                            paddingLeft: "20px"
                        }}> { agenda.manicurista } </div>
                        <AgendaTable
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                            {...agenda}
                        />
                    </Row>
                )
            })}
        </div>
    )
}

export default AgendaScreen;