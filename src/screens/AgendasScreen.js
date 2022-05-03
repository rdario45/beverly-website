import AgendaWeekly from "../components/AgendaWeekly";

const AgendaScreen = ({ currentWeek, onDelete, onUpdate, onSelect, activeDay }) => {
    return (
        <AgendaWeekly
            week={currentWeek}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onSelect={onSelect}
            activeDay={activeDay}
        />
    )
};

export default AgendaScreen;