import { Container, Col, Row } from 'react-bootstrap';

function MonitorScreen({ orientation }) {
    return (
        <Container>

            {orientation === "vertical" ?
                <Col>
                    <Row> test A </Row>
                </Col> :
                <span>
                    <Row>
                        <Col> Agendas </Col>
                        <Col> Citas </Col>
                        <Col> Accurate </Col>
                    </Row>
                    <Row style={{ background: "Aquamarine" }}>
                        <Col> 10 </Col>
                        <Col> 196 </Col>
                        <Col> 100% </Col>
                    </Row>
                </span>
            }

        </Container>
    )
}

export default MonitorScreen;