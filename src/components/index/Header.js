import React, { useState } from "react";
import "../../styles/components/header.scss";
import Hamburger from "hamburger-react";
import Nav from "./Nav";
import { Link } from "gatsby";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="content-container header">
          <div className="header__left">
            <Link to="/">Cees Jol</Link>
          </div>
          <div className="header__right">
            <div className="header__right--nav">
              <Nav />
            </div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        {isOpen && (
          <div className="header__mobile-nav">
            <Nav />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
