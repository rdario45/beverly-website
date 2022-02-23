import { Stack, Modal, Button } from "react-bootstrap";
import BasicDatePicker from "./DatePicker";
import BeverlySidebar from "./BeverlySidebar";
import { VscCalendar } from "react-icons/vsc";
import CreateForm from "./CreateForm";

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
                    <BasicDatePicker selectedDate={selectedDate} handleDateChange={updateFecha} />
                </div>
            </div>

            <div style={{
                paddingRight: "15px"
            }}>
                    <VscCalendar onClick={handleShow}/>
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