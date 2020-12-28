import React from "react";
import "../../styles/components/skills.scss";
import SKILL_SECTIONS from "../../constants/skills";

const Skills = () => {
  return (
    <div className="skills">
      {SKILL_SECTIONS.map((skill) => (
        <div className="skills__column" key={`skills__column-${skill.title}`}>
          <h2>{skill.title}</h2>
          <p>{skill.description}</p>
          {skill.sections.map((section) => (
            <div key={`section-${section.title}`}>
              <h3>{section.title}</h3>
              {section.content.map((item) => (
                <p key={`sectionItem-${item}`}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
