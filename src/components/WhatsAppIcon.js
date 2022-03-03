import { useState } from "react";
import { ImWhatsapp } from "react-icons/im"
import { IconContext } from "react-icons"
// import { Overlay } from "react-bootstrap";

const WhatsAppIcon = ({ telefono, whatsappIconRefTarget }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <IconContext.Provider value={{ color: 'green' }}>
                <ImWhatsapp ref={whatsappIconRefTarget} onClick={() => setShow(!show)} />
            </IconContext.Provider>
            {/* <Overlay target={whatsappIconRefTarget.current} show={show} placement="up">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div {...props} style={{
                        backgroundColor: 'rgba(255, 100, 100, 0.85)',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                    }} > {telefono} </div>
                )}
            </Overlay> */}
        </>
    );
}

export default WhatsAppIcon;