import { Container, Col, Row } from 'react-bootstrap';

function CampañasScreen({ orientation }) {
  return (
    <Container>
      {orientation === "vertical" ?
        <Col>
          <Row style={{ backgroundColor: "blue" }}><div>Campañas</div></Row>
        </Col> :
        <Row>
          <Col style={{ backgroundColor: "red" }}><div>Campañas</div></Col>
        </Row>}
    </Container>
  )
}

export default CampañasScreen;