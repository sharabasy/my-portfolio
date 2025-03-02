import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/slices/themeSlice";
import { toggleLanguage } from "../../store/slices/languageSlice";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaMoon,
  FaSun,
  FaGlobe,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Get current route

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { key: "home", icon: <FaHome /> },
    { key: "about", icon: <FaUser /> },
    { key: "projects", icon: <FaProjectDiagram /> },
    { key: "skills", icon: <FaTools /> },
    { key: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`navbar ${darkMode ? "dark" : ""} ${
        language === "ar" ? "rtl" : ""
      }`}
    >
      {/* Hamburger Menu Button */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={t("navbar.toggleMenu")}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <Link to="/" className="logo">
        <span className="portfolio-text">
          <span className="first">{t("navbar.portfolioFirst")} </span>
          <span className="second">{t("navbar.portfolioSecond")}</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <ul ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ key, icon }) => {
          const isActive =
            location.pathname === `/${key === "home" ? "" : key}`;

          return (
            <li key={key} className={isActive ? "active" : ""}>
              <Link
                to={`/${key === "home" ? "" : key}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-icon">{icon}</span> {t(`navbar.${key}`)}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Action Buttons */}
      <div className="actions">
        <button
          className="theme-toggle"
          onClick={() => dispatch(toggleDarkMode())}
          title={t("navbar.toggleTheme")}
          aria-label={t("navbar.toggleTheme")}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="lang-toggle"
          onClick={() => dispatch(toggleLanguage())}
          title={t("navbar.switchLanguage")}
          aria-label={t("navbar.switchLanguage")}
        >
          <FaGlobe className="lang-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
