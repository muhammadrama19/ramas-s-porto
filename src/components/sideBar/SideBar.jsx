import { Container, Nav } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./sideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar mt-5">
      <Container>
        <h1 className="sidebar-title"> M. Rama Nurimani</h1>
        <h4 className="sidebar-subtitle text-decoration-italic"> <em>
        Front End Engineer
          </em></h4>
        <p className="sidebar-description">
        I’m a third-year Informatics Engineering student at Politeknik Negeri Bandung, specializing in front-end development to create efficient, user-friendly, and impactful digital solutions. If there’s anything I can assist with, feel free to email me at rama.nurimani19@gmail.com.
        </p>
        <Nav className="flex-column sidebar-nav">
          <Nav.Link href="#about" className="sidebar-link">
            About
          </Nav.Link>
          <Nav.Link href="#experiences" className="sidebar-link">
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
