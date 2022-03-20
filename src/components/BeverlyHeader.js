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
    createFormCtrlPkg
}) => {
    return (
        <Stack direction="horizontal" ref={beverlyHeaderRef}>
            <BeverlySidebar />
            <div style={{
                margin: "auto",
                fontSize: "48px",
            }}> Agendas

                <div style={{
                    paddingLeft: "10px",
                    display: "inline-flex"
                }}>
                    <InputDatePicker selectedDate={selectedDate} handleDateChange={updateFecha} />
                </div>
            </div>

            <div style={{
                paddingRight: "15px"
            }}>
                <VscCalendar onClick={handleShow} />
            </div>

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