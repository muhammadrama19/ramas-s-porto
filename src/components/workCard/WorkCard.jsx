import { Card, Badge } from "react-bootstrap";
import "./WorkCard.css";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

const WorkCard = ({ src, title, description, badges = [], links = [] }) => {
  return (
    <Card className="work-card mb-3">
      <Card.Img variant="top" src={src} alt="work" className="work-card-image" />
      <Card.Body>
        <Card.Title className="work-card-title">{title}</Card.Title>
        <Card.Text className="work-card-description">
          {description}
        </Card.Text>
        {links.length > 0 && (
          <div className="links-container">
            {links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="work-card-link">
                {link.label} <CallMadeOutlinedIcon className="link-icon"/>
              </a>
            ))}
          </div>
        )}
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