import React from "react";
import CONTACT_INFO from "../../constants/contact";
import NavItem from "./NavItem";
import "../../styles/components/nav.scss";
import LanguageMenu from "./LanguageMenu";

const Nav = () => {
  return (
    <div className="nav">
      <LanguageMenu />
      {CONTACT_INFO.map((item) => (
        <NavItem contact={item} key={`CONTACT_INFO-${item.name}`} />
      ))}
    </div>
  );
};

export default Nav;
