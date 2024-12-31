import { Container, Nav } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar mt-5">
      <Container>
        <h1 className="sidebar-title">Rama Nurimani</h1>
        <h4 className="sidebar-subtitle">Front End Engineer</h4>
        <p className="sidebar-description">
        I create seamless and efficient digital solutions.
        </p>
        <Nav className="flex-column sidebar-nav">
          <Nav.Link href="#about" className="sidebar-link">
            About
          </Nav.Link>
          <Nav.Link href="#experience" className="sidebar-link">
            Experience
          </Nav.Link>
          <Nav.Link href="#projects" className="sidebar-link">
            Projects
          </Nav.Link>
        </Nav>
        <div className="social-links">
          <a
            href="https://github.com/muhammadrama19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="links" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-rama-nurimani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="links" />
          </a>
          <a
            href="https://instagram.com/ramanurimani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="links" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
