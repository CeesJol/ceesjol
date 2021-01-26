import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import detectLanguage, {
  DEFAULT_LANGUAGE,
} from "../../constants/detectLanguage";
import "../../styles/general/language-menu.scss";

const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  function handleChange(event) {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  }

  useEffect(() => {
    setLanguage(detectLanguage());
  }, []);

  return (
    // Disable eslint here for onBlur/onChange
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select
      value={language}
      onChange={(e) => handleChange(e)}
      className="language-menu"
    >
      {/* Disable eslint as option tags do not allow tags */}
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <option value="en">🇺🇸</option>
      <option value="nl">🇳🇱</option>
      {/* eslint-enable jsx-a11y/accessible-emoji */}
    </select>
  );
};

export default LanguageMenu;
