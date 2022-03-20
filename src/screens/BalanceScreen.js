import { Container, Col, Row } from 'react-bootstrap';
import ChartBarBeverly from '../components/ChartBarBeverly';
import ChartPieBeverly from '../components/ChartPieBeverly';

function BalanceScreen({ pie, bar, orientation }) {
  return (
    <Container>
      {orientation === "vertical" ?
        <Col>
          <Row> <ChartPieBeverly data={pie} /> </Row>
          <Row> <ChartBarBeverly data={bar} /> </Row>
        </Col> :
        <Row>
          <Col> <ChartPieBeverly data={pie} /> </Col>
          <Col> <ChartBarBeverly data={bar} /> </Col>
        </Row>}
    </Container>
  )
}

export default BalanceScreen;