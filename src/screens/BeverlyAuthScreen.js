import { Container, Col, Row } from 'react-bootstrap';
import SendCodeScreen from "./SendCodeScreen"
import SingInScreen from "./SingInScreen"

function BeverlyAuthScreen({ waitingOTP, signinCtrl, sendcodeCtrl }) {
    return (
        <Container>
            {waitingOTP ? <SingInScreen {...signinCtrl}/> : <SendCodeScreen {...sendcodeCtrl}/>}
        </Container>
    )
}

export default BeverlyAuthScreen;