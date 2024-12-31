import React from "react";
import ExperienceCard from "../../components/ExpCard/Exp";
import "./ExpPage.css";

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <h1 className="page-title">My Experiences</h1>
      <div className="cards-container">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default ExperiencePage;
