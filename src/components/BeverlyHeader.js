import { Stack } from "react-bootstrap"
import BasicDatePicker from "./DatePicker"
import Sidebar from "./Sidebar"
import { VscCalendar } from "react-icons/vsc"
import { Button } from "react-bootstrap";

const BeverlyHeader = ({ selectedDate, handleDateChange, handleShow }) => {
    return (
        <Stack direction="horizontal" style={{
        }}>
            <Sidebar />
            <div id="agendaId" style={{
                margin: "auto"
            }}>
                Agenda: <BasicDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
            </div>
            <div style={{
                paddingRight: "15px"
            }}>
                <Button variant="primary" onClick={handleShow}>
                    <VscCalendar />
                </Button>
            </div>
        </Stack>
    );
}

export default BeverlyHeader;