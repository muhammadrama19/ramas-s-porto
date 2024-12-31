import React from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Exp.css";

const Exp = ({ date, title, description, badges }) => {
  return (
    <Card className="experience-card mb-3">
      <Card.Body>
        <Row>
          <Col md={12} sm={12}>
            <Card.Title className="experience-title">
              {title}
            </Card.Title>
            <Card.Subtitle className="experience-date">
              <small>{date}</small>
            </Card.Subtitle>
            <Card.Text className="experience-description">
              <ul>
                {description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </Card.Text>
            <div className="badge-container">
              {badges.map((badge, index) => (
                <Badge key={index} className="badge-custom">
                  {badge}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Exp;