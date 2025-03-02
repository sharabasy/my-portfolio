import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"; // Import Redux hook
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.theme.darkMode); // Get Dark Mode state

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <p className="footer-text">{t("footer.text")}</p>
      <p className="footer-text">{t("footer.text2")}</p>
    </footer>
  );
};

export default Footer;
