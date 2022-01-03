import { Stack } from "react-bootstrap"
import BasicDatePicker from "./DatePicker"
import Sidebar from "./Sidebar"

const BeverlyHeader = ({selectedDate, handleDateChange}) => {
    return (
        <Stack direction="horizontal">
            <Sidebar />
            <div id="agendaId" className="ms-auto"> Agenda: 
                <BasicDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
            </div>
        </Stack>
    );
}

export default BeverlyHeader;