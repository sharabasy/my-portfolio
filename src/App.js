import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

import "./app.module.scss";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default App;
