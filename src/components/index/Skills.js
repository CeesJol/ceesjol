import React from "react";
import "../../styles/components/skills.scss";
import SKILL_SECTIONS from "../../constants/skills";

const Skills = () => {
  return (
    <div className="skills">
      {SKILL_SECTIONS.map((skill) => (
        <div className="skills__column">
          <h2>{skill.title}</h2>
          <p>{skill.description}</p>
          {skill.sections.map((section) => (
            <>
              <h3>{section.title}</h3>
              {section.content.map((item) => (
                <p>{item}</p>
              ))}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
