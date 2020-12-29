import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import detectLanguage from "../../constants/language";
import "../../styles/general/language-menu.scss";

const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(detectLanguage());

  function handleChange(event) {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
    console.log("event.target.value:", event.target.value);
  }

  return (
    <select value={language} onChange={(e) => handleChange(e)}>
      <option value="en">🇺🇸</option>
      <option value="nl">🇳🇱</option>
    </select>
  );
};

export default LanguageMenu;
