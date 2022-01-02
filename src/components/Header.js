
import BasicDatePicker from "./DatePicker"
import Sidebar from "./Sidebar"
import { Stack } from "react-bootstrap"

const Header = ({selectedDate, handleDateChange}) => {
    return (
        <>
            <Stack direction="horizontal">
                <Sidebar />
                <div id="agendaId" className="ms-auto"> Agenda: 
                    <BasicDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
                </div>
            </Stack>
        </>
    );
}

export default Header;