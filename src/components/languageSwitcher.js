import React from "react";
import { Language } from "@wapps/gatsby-plugin-i18next";
const LanguageSwitcher = ({ changeLng, lng, availableLngs }) => (
  <select onChange={(e) => changeLng(e.target.value)}>
    {console.log("BUT WHY????????")}
    {(availableLngs || []).map((value) => (
      <option key={value} selected={lng === value}>
        {value}
      </option>
    ))}
    ;
  </select>
);
export default (props) => (
  <Language>
    {(lngProps) => <LanguageSwitcher {...props} {...lngProps} />}
  </Language>
);
