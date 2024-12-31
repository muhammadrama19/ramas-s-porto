import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./WorkCard.css";

const WorkCard = ({ src, title, description, badges = [] }) => {
  return (
    <Card className="work-card mb-3">
      <Card.Img variant="top" src={src} alt="work" className="work-card-image" />
      <Card.Body>
        <Card.Title className="work-card-title">{title}</Card.Title>
        <Card.Text className="work-card-description">
          {description}
        </Card.Text>
        <div className="badge-container">
          {badges.map((badge, index) => (
            <Badge key={index} className="badge-custom">
              {badge}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;