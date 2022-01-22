import { useEffect } from "react";
import ScheduleWeek from "../components/ScheduleWeek";

function AgendaScreen({ fecha, week, onDelete, onUpdate, loadAgendas, onSelect, activeDay }) {

    useEffect(() => {
        loadAgendas(fecha);
    }, [fecha]);

    return (
        <ScheduleWeek
            week={week}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onSelect={onSelect}
            activeDay={activeDay}
        />
    )
}

export default AgendaScreen;