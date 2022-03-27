import { ImWhatsapp } from "react-icons/im"
import { IconContext } from "react-icons"

const WhatsAppIcon = ({ phone }) => {
    const isValidPhone = phone !== "+57 " &&  phone !== "";
    return (
        isValidPhone ? <IconContext.Provider value={{ color: 'green' }}>
            <ImWhatsapp onClick={() => alert(phone)} />
        </IconContext.Provider> : ""
    );
}

export default WhatsAppIcon;