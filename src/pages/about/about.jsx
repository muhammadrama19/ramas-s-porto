// pages/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import Exp from "../../components/ExpCard/Exp";
import WorkCard from "../../components/workCard/WorkCard";
import myImage from "../../assets/Frame 6.png";


const About = () => {
    const experiences = [
        {
          date: "Jan 2020 - Present",
          title: "Front-End Developer",
          description: "Developing and maintaining the front end of web applications.",
          badges: ["React", "JavaScript", "CSS"]
        },
        {
          date: "Jun 2018 - Dec 2019",
          title: "Web Developer Intern",
          description: "Assisted in the development of web applications and websites.",
          badges: ["HTML", "CSS", "Bootstrap"]
        }
      ];
  return (
    <Container fluid className="about-section">
      <Row>
        <Col xs={12} sm={12} md={12} className="mx-3">
          <p className="about-description">
            Hi, I'm Rama – a passionate and driven Front-End Developer with
            experience in crafting user-focused web applications. My journey
            began with university projects, where I collaborated on various group
            assignments, and extended to freelancing on research-focused apps for
            lecturers.
          </p>
          <p className="about-description">
            I specialize in building responsive and scalable applications using
            React.js, Vue.js, Bootstrap, and SCSS. I have a keen eye for detail,
            which helps me create reusable components that enhance code
            maintainability and efficiency. Additionally, I’m familiar with REST
            APIs, basic SQL, and MongoDB, and I have hands-on experience in backend
            development to ensure smooth integrations across the stack.
          </p>
          <p className="about-description">
            I believe in writing clean, readable code and embracing innovation to
            bring projects to life. My strengths lie in being detail-oriented, a
            hard worker, and someone who quickly adapts to learning new technologies
            to meet project goals effectively.
          </p>
          <p className="about-description">
            My goal is to collaborate with inspiring teams and continue enhancing my
            skills while delivering exceptional digital experiences. Let’s build
            something amazing together!
          </p>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col xs={12} md={12}>
          {experiences.map((exp, index) => (
            <Exp
              key={index}
              date={exp.date}
              title={exp.title}
              description={exp.description}
              badges={exp.badges}
            />
          ))}
        </Col>
      </Row>
      <WorkCard src={myImage} title="My Project" description="Description of my project" />

    </Container>
  );
};

export default About;
