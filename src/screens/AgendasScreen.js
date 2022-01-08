import { useEffect } from 'react';
import { Row, Carousel } from "react-bootstrap";
import AgendaTable from "../components/AgendaTable"

function AgendaScreen({ fecha, agendas, onDelete, onUpdate, loadAgendas }) {

    useEffect(() => {
        loadAgendas(new Date(fecha.toDateString()).getTime().toString());
    }, [fecha]);

    const agendasConCitas = agendas.filter(agenda => agenda.citas.length > 0);
    
    return (
        <div style={{
            textAlign: "center"
        }}>
            <br />
            {agendasConCitas.length > 0 ?
                agendasConCitas.map((agenda, key) =>
                    <Row key={key} style={{
                        padding: "0px 20px",
                    }}>
                        <div style={{
                            paddingLeft: "20px"
                        }}> {agenda.manicurista} </div>
                        <AgendaTable
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                            agendaId={agenda.id}
                            {...agenda}
                        />
                    </Row>) : <div>Crea una Cita</div>
            }
        </div>
    )
}

export default AgendaScreen;