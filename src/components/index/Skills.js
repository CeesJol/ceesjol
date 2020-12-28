import React from "react";
import "../../styles/components/skills.scss";
import SKILL_SECTIONS from "../../constants/skills";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="skills">
      {SKILL_SECTIONS.map((skill) => (
        <div className="skills__column" key={`skills__column-${skill.title}`}>
          <h2>{t(skill.title)}</h2>
          <p>{t(skill.description)}</p>
          {skill.sections.map((section) => (
            <div key={`section-${section.title}`}>
              <h3>{t(section.title)}</h3>
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
