import React from "react";
import CONTACT_INFO from "../../constants/contact";
import NavItem from "./NavItem";
import "../../styles/components/nav.scss";
import LanguageMenu from "../general/LanguageMenu";

const Nav = () => {
  return (
    <div className="nav">
      {CONTACT_INFO.map((item) => (
        <NavItem contact={item} key={`CONTACT_INFO-${item.name}`} />
      ))}
      <LanguageMenu />
    </div>
  );
};

export default Nav;
