import React from "react";
import "../../styles/components/footer.scss";
import ContactIcon from "./ContactIcon";
import CONTACT_INFO from "../../constants/contact";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const getYear = () => new Date().getFullYear();
  const drawContact = () => {
    return CONTACT_INFO.map((item) => (
      <ContactIcon contact={item} key={`CONTACT_INFO-${item.name}`} />
    ));
  };
  return (
    <footer>
      <div className="container container--primary-color">
        <div className="content-container footer">
          <div className="contact-container">{drawContact()}</div>
          <div className="footer__copy" style={{ marginTop: "4rem" }}>
            &copy; {getYear()} Cees Jol
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
