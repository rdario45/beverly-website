import CarouselWeekly from "../components/CarouselWeekly";

const AgendaScreen = ({ currentWeek, onDelete, onUpdate, onSelect, activeDay }) => {
    return (
        <CarouselWeekly
            week={currentWeek}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onSelect={onSelect}
            activeDay={activeDay}
        />
    )
};

export default AgendaScreen;