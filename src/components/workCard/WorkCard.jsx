import { Container, Row, Col, Card } from "react-bootstrap";
import "./WorkCard.css";

const WorkCard = ({ src, title, description }) => {
  return (
    <Card className="work-card">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <Card.Img
              src={src}
              alt="work"
              className="work-card-image"
            />
          </Col>
          <Col md={8} sm={12}>
            <Card.Body>
              <Card.Title className="work-card-title">{title}</Card.Title>
              <Card.Text className="work-card-description">
                {description}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default WorkCard;