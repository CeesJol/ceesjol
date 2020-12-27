import React from "react";
import "../styles/components/footer.scss";
import SocialIcon from "./SocialIcon";
import SOCIAL_MEDIA from "../constants/social";

const Footer = () => {
  const getYear = () => new Date().getFullYear();
  const drawSocial = () => {
    return SOCIAL_MEDIA.map((social) => <SocialIcon social={social} />);
  };
  return (
    <footer>
      <div className="container container--primary-color">
        <div className="content-container footer">
          <div className="social-container">{drawSocial()}</div>
          <div className="footer__copy" style={{ marginTop: "2rem" }}>
            &copy; {getYear()} Cees Jol
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
