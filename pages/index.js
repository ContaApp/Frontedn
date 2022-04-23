import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/utilities/Layout'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={12} md={6}>Hero</Col>
          <Col sm={12} md={6} >Hero</Col>
        </Row>
        <Row>
          <Col sm={12} md={6} >Section 1</Col>
          <Col sm={12} md={6} >Section 1</Col>
        </Row>
        <Row>
          <Col sm={12} md={6} >Section 2</Col>
          <Col sm={12} md={6} >Section 2</Col>
        </Row>
        <Row>
          <Col sm={12} md={6} >Section 3</Col>
          <Col sm={12} md={6} >Section 3</Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>Card</Col>
          <Col sm={12} md={6}>Card</Col>
        </Row>
      </Container>
    </Layout>
  )
}
