import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import Exp from "../../components/ExpCard/Exp";
import WorkCard from "../../components/workCard/WorkCard";
import myImage from "../../assets/Frame 6.png";
import imageWork2 from "../../assets/Desktop Mockup 04.png";
import imageWork3 from "../../assets/Desktop Mockup 07.png";
import imageWork4 from "../../assets/tttt.png";
import imageWork5 from "../../assets/DDDD.png";
import imageWork6 from "../../assets/MovieMess.png";
import imageWork7 from "../../assets/sipta_img.png";
import { Links } from "react-router-dom";

const About = () => {
  const subtitleRefs = useRef([]);
  const [hoveredStates, setHoveredStates] = useState([false, false]); // Adjust size based on subtitle count

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = subtitleRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setHoveredStates((prevState) => {
              const newState = [...prevState];
              newState[index] = entry.isIntersecting;
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    subtitleRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      subtitleRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const experiences = [
    {
      date: "June 2025 - Present",
      title: "Backend Engineer at PT. Neural Technologies Indonesia",
      description: [
        "Currently working as backend engineer using Odoo with Python and PostgreSQL developing for ERP System.",
      ],
    },
    {
      date: "Feb 2024 - Oktober 2024",
      title: "Front-End Developer - Politeknik Negeri Bandung",
      description: [
        "Developed the front end for a touchless exhibition app utilizing Kinect sensors as part of a lecturer's project research.",
        "Assisted with backend tasks, including migrating and organizing data from spreadsheets into structured SQL files using Python.",
      ],
      badges: ["HTML", "JavaScript", "CSS", "Python", "PostgreSQL"],
    },
    {
      date: "July 2024 - August 2024",
      title: "UI/UX Mentor - Himakom Course Politeknik Negeri Bandung",
      description: [
        "Conducted mentoring sessions for 24 participants, with a focus on user experience principles, including heuristics of design and usability.",
        "Supervised the creation of essential documents, such as software requirements and task outlines, ensuring clarity and alignment with best practices.",
        "Personally contributed by providing detailed feedback, guiding participants to improve their designs, and fostering an understanding of user-centered approaches.",
      ],
      badges: ["UI/UX", "Figma", "Usability", "Prototyping"],
    },
  ];
  const projects = [
    {
      src: imageWork7,
      title: "Sistem Pengelolaan Tugas Akhir Mahasiswa",
      description:
        "Sistem Pengelolaan Tugas Akhir Mahasiswa is a web application designed to manage student final projects. It allows managing end to end activity of final project in Computer Software Engineering Department, Politeknik Negeri Bandung more centralized and digitalized. As developer I work closely with Devops (Integrator) and Quality Assurance team developing feature, first, I developed the feature for viewing any lecturer who has been filled the FTA01 form, then I developed feature allowing student to view the lecturer schedule for final project consultation, also I assit in developing lecturer allocation for final project examiner. This project involve end to end development from Requirement Engineering, Design and Prototyping interface, Development, Testing from QA team and continous feedback from User Acceptance Testing (UAT) from the user.",
      badges: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    },
    {
      src: imageWork6,
      title: "Movie Mess",
      description:
        "Movie Message is web app where people can send their menfess with attached movie anonymously.",
      badges: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "Tailwind CSS",
        "ShadCN UI",
      ],
      links: [
        {
          label: "Live",
          url: "https://movie-message.vercel.app/dashboard",
        },
        {
          label: "Repository",
          url: "https://github.com/muhammadrama19/movie-message",
        },
      ],
    },
    {
      src: myImage,
      title: "LalajoEuy Movie ",
      description:
        "Lalajo Euy! is a movie platform app where users can explore and review movies, supported by a CMS for admin content management. The project involved creating a modern interface, implementing authentication, conducting testing, and ensuring a seamless user experience. It highlights skills in full-stack development and deployment.",
      badges: [
        "React.js",
        "React-Bootstrap",
        "SCSS",
        "Material-UI",
        "REST API",
        "Express.js",
        "MySQL",
        "JWT",
        "OAuth",
        "Git",
        "Vercel",
        "Jest",
        "Selenium",
      ],
      links: [
        {
          label: "Website",
          url: "https://webdev2024-v75w.vercel.app/",
        },
        {
          label: "GitHub",
          url: "https://github.com/muhammadrama19/webdev2024",
        },
      ],
    },
    {
      src: imageWork2,
      title: "Sentiment Analysis Dashboard of Gojek App Reviews on Play Store",
      description:
        "Sentiment Analysis powered by RoBERTa model to analyze Gojek app reviews on Play Store. The project involved creating use case diagrams, process diagrams also designing interface. ETL process was done to clean the data and then the data was analyzed using RoBERTa model. The result was displayed in a dashboard.",
      badges: [
        "Python",
        "RoBERTa",
        "Figma",
        "Pandas",
        "Prototyping",
        "Data Analysis",
        "Data Visualization",
      ],
      links: [
        {
          label: "Dashboard",
          url: "https://www.figma.com/proto/KmF4zQNrKP2cQf9Cc2fWMw/Rama's-file?node-id=15-759&p=f&t=V1KPT1k5Lo0KSpmQ-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A759",
        },
      ],
    },
    {
      src: imageWork3,
      title: "AKU Si PEMBURU KUYANG",
      description:
        "Aku si PEMBURU KUYANG is a game that tells the story of a shaman who is hunting for a KUYANG. The game consists of two mode, endless mode and story mode. I tasked to create story mode and world building also storyline. ",
      badges: ["Godot Engine", "GDScript", "Blender", "Adobe Illustrator"],
      links: [
        {
          label: "Game",
          url: "https://heaplow.itch.io/aku-si-pemburu-kuyang",
        },
      ],
    },
    {
      src: imageWork4,
      title: "VoteHub",
      description:
        "Votehub is static website that developed to provide information about President Election 2024. This Website is to fullfill as final assignments for User Interface Design Class. We developed the website based on user persona that gathered through interview to ensure User Centered Design.",
      badges: ["Figma", "HTML", "CSS", "JavaScript"],
      links: [
        {
          label: "Website",
          url: "https://muhammadrama19.github.io/votehub/",
        },
      ],
    },
    {
      src: imageWork5,
      title: "Tic Tac Toe Game",
      description:
        "Tic Tac Toe Game is a simple game that developed to fullfill as final assignments for Fundamental Programming. Built on C language.",
      badges: ["C", "Fundamental Programming"],
      links: [
        {
          label: "GitLab",
          url: "https://gitlab.com/segfault_tubes_sem1/tictactwo_segfault_tubes",
        },
      ],
    },
  ];
  return (
    <Container id="about" fluid className="about-section">
      <Row className="mobile-only">
        <Col xs={12} sm={12} md={12} className="mx-3">
          <h2
            ref={(el) => (subtitleRefs.current[0] = el)}
            className={`about-subtitle ${hoveredStates[0] ? "hovered" : ""}`}
          >
            About
          </h2>
        </Col>
      </Row>

      <Row className="mb-4" id="about">
        <Col xs={12} sm={12} md={12} className="mx-3">
          <p className="about-description">
            Hi, I'm Rama – a passionate and driven Fullstack Engineer with
            experience in crafting user-focused web applications. My journey
            began with university projects, where I collaborated on various
            group assignments, and extended to freelancing on research-focused
            apps for lecturers.
          </p>
          <p className="about-description">
            I specialize in building responsive and scalable applications using
            React.js, Vue.js, Bootstrap, and CSS. Also have fundamental in UI/UX
            and familiar with figma. I have a keen eye for detail, which helps
            me create reusable components that enhance code maintainability and
            efficiency. Additionally, I’m familiar with REST APIs, basic SQL,
            and MongoDB, and I have hands-on experience in backend development
            to ensure smooth integrations across the stack.
          </p>
          <p className="about-description">
            I believe in writing clean, readable code and embracing innovation
            to bring projects to life. My strengths lie in being
            detail-oriented, a hard worker, and someone who quickly adapts to
            learning new technologies to meet project goals effectively.
          </p>
          <p className="about-description">
            My goal is to collaborate with inspiring teams and continue
            enhancing my skills while delivering exceptional digital
            experiences. Let’s build something amazing together!
          </p>
        </Col>
      </Row>
      <Row className="mobile-only">
        <Col xs={12} sm={12} md={12} className="mx-3">
          <h2
            ref={(el) => (subtitleRefs.current[1] = el)}
            className={`about-subtitle ${hoveredStates[1] ? "hovered" : ""}`}
          >
            Experiences
          </h2>
        </Col>
      </Row>
      <Row id="experiences" className="mb-4">
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
      <Row className="mobile-only">
        <Col xs={12} sm={12} md={12} className="mx-3">
          <h2
            ref={(el) => (subtitleRefs.current[2] = el)}
            className={`about-subtitle ${hoveredStates[2] ? "hovered" : ""}`}
          >
            Projects
          </h2>
        </Col>
      </Row>
      <Row id="projects" className="mb-4">
        <Col xs={12} md={12}>
          {projects.map((project, index) => (
            <WorkCard
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
              badges={project.badges}
              links={project.links}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
