import { Stack } from "react-bootstrap"
import BasicDatePicker from "./DatePicker"
import BeverlySidebar from "./BeverlySidebar"
import { VscCalendar } from "react-icons/vsc"
import { Button } from "react-bootstrap";

const BeverlyHeader = ({ selectedDate, handleDateChange, handleShow, headerRef }) => {
    return (
        <Stack direction="horizontal" ref={headerRef}> 

            <BeverlySidebar />

            <div id="agendaId" style={{
                margin: "auto"
            }}> Agenda: <BasicDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} /> </div>

            <div style={{
                paddingRight: "15px"
            }}> <Button size="lg" variant="primary" onClick={handleShow}>
                    <VscCalendar />
                </Button>
            </div>
        </Stack>
    );
}

export default BeverlyHeader;