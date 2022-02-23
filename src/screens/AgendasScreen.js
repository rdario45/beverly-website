import ScheduleWeek from "../components/ScheduleWeek";

const AgendaScreen = ({ currentWeek, onDelete, onUpdate, onSelect, activeDay }) => {
    return (
        <ScheduleWeek
            week={currentWeek}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onSelect={onSelect}
            activeDay={activeDay}
        />
    )
};

export default AgendaScreen;