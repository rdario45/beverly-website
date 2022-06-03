import { Container, Col, Row, Badge} from 'react-bootstrap';
import ChartPieBeverly from '../components/ChartPieBeverly';

function BalanceScreen({ pie, bar, orientation, total }) {
  
  const xTotal = <Badge bg="secondary"> {'$' + total.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </Badge>
  
  return (
    <Container>
      {orientation === "vertical" ?
        <Col>
          <Row> <ChartPieBeverly data={pie} /> </Row>
        </Col> :
        <>
          <Row>
            <Col> {xTotal} </Col>
          </Row>
          <Row>
            <Col> <ChartPieBeverly data={pie} /> </Col>
          </Row>
        </>
      }
    </Container>
  )
}

export default BalanceScreen;