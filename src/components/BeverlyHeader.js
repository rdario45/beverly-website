import { Stack } from "react-bootstrap";
import InputDatePicker from "./DateInputPicker";
import BeverlySidebar from "./BeverlySidebar";

const BeverlyHeader = ({
    beverlyHeaderRef,
    updateFecha,
    selectedDate,
    icons
}) => {
    return (
        <Stack direction="horizontal" ref={beverlyHeaderRef}>

            <BeverlySidebar />

            <div style={{
                display: "inline-flex",
                margin: "auto",

            }}>
                <div style={{
                    fontSize: "32px"
                }}> Agenda </div>

                <div style={{
                    paddingLeft: "10px",
                    paddingTop: "10px",

                    margin: "auto",
                    width: "150px"

                }}>

                    <InputDatePicker selectedDate={selectedDate} handleDateChange={updateFecha} />
                </div>

            </div>

            {icons.map(
                icon =>

                    <div style={{
                        paddingRight: "15px",
                        // paddingLeft: "150px"
                    }}>
                        {icon}
                    </div>
            )}


        </Stack>
    );
}

export default BeverlyHeader;