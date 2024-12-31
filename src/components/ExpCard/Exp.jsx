import React from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Exp.css";

const Exp = ({ date, title, description, badges }) => {
  return (
    <Card className="experience-card mb-3">
      <Card.Body>
        <Row>
          <Col md={4} sm={12} className="left-column">
            <Card.Subtitle className="experience-date">
              <small>{date}</small>
            </Card.Subtitle>
          </Col>
          <Col md={8} sm={12}>
            <Card.Title className="experience-title">
              {title} 
            </Card.Title>
            <Card.Text className="experience-description">
              {description}
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
