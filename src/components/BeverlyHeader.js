import { Stack, Modal } from "react-bootstrap";
import InputDatePicker from "./DateInputPicker";
import BeverlySidebar from "./BeverlySidebar";
import { VscCalendar } from "react-icons/vsc";
import CreateForm from "./CreateCitaForm";

const BeverlyHeader = ({
    beverlyHeaderRef,
    isModalVisible,
    updateFecha,
    selectedDate,
    handleShow,
    handleClose,
    createFormCtrlPkg,
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

            <div style={{
                paddingRight: "15px",
                paddingLeft: "150px"
            }}>
                <VscCalendar onClick={handleShow} />
            </div>

            {/* HIDDEN */}

            <Modal show={isModalVisible} onHide={handleClose}>
                <Modal.Body>
                    <CreateForm
                        {...createFormCtrlPkg}
                    />
                </Modal.Body>
            </Modal>

        </Stack>
    );
}

export default BeverlyHeader;