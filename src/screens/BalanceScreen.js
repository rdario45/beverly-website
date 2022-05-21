import { Container, Col, Row, Badge} from 'react-bootstrap';
import ChartBarBeverly from '../components/ChartBarBeverly';
import ChartPieBeverly from '../components/ChartPieBeverly';

function BalanceScreen({ pie, bar, orientation, total }) {
  
  const xTotal = <Badge bg="secondary"> {'$' + total.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </Badge>
  
  return (
    <Container>
      {orientation === "vertical" ?
        <Col>
          <Row> <ChartPieBeverly data={pie} /> </Row>
          <Row> <ChartBarBeverly data={bar} /> </Row>
        </Col> :
        <>
          <Row>
            <Col> {xTotal} </Col>
          </Row>
          <Row>
            <Col> <ChartPieBeverly data={pie} /> </Col>
            <Col> <ChartBarBeverly data={bar} /> </Col>
          </Row>

        </>
      }
    </Container>
  )
}

export default BalanceScreen;