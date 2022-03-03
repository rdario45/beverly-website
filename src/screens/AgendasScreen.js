import CarouselWeekly from "../components/CarouselWeekly";

const AgendaScreen = ({ currentWeek, onDelete, onUpdate, onSelect, activeDay, whatsappIconRefTarget }) => {
    return (
        <CarouselWeekly
            week={currentWeek}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onSelect={onSelect}
            activeDay={activeDay}
            whatsappIconRefTarget={whatsappIconRefTarget}
        />
    )
};

export default AgendaScreen;