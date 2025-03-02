import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCode, FaProjectDiagram, FaLightbulb, FaUsers } from "react-icons/fa";
import styles from "./About.module.scss";

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("about.title");
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <motion.section
      className={`${styles.about} ${language === "ar" ? styles.rtl : ""} ${
        darkMode ? styles.dark : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <h1 className={darkMode ? styles.darkText : ""}>
          <FaLightbulb className={styles.icon} /> {t("about.heading")}
        </h1>
        <p className={darkMode ? styles.darkText : ""}>{t("about.intro")}</p>
        <p className={darkMode ? styles.darkText : ""}>{t("about.skills")}</p>
        <p className={darkMode ? styles.darkText : ""}>{t("about.teamwork")}</p>

        <div className={styles.skillsSection}>
          <h2 className={darkMode ? styles.darkText : ""}>
            {t("about.skillsTitle")}
          </h2>
          <div className={styles.skillsGrid}>
            <div
              className={`${styles.skillCard} ${
                darkMode ? styles.darkCard : ""
              }`}
            >
              <FaCode className={styles.skillIcon} />
              <h3>{t("about.frontend")}</h3>
              <p>{t("about.frontendDesc")}</p>
            </div>
            <div
              className={`${styles.skillCard} ${
                darkMode ? styles.darkCard : ""
              }`}
            >
              <FaProjectDiagram className={styles.skillIcon} />
              <h3>{t("about.projects")}</h3>
              <p>{t("about.projectsDesc")}</p>
            </div>
            <div
              className={`${styles.skillCard} ${
                darkMode ? styles.darkCard : ""
              }`}
            >
              <FaLightbulb className={styles.skillIcon} />
              <h3>{t("about.problemSolving")}</h3>
              <p>{t("about.problemSolvingDesc")}</p>
            </div>
            <div
              className={`${styles.skillCard} ${
                darkMode ? styles.darkCard : ""
              }`}
            >
              <FaUsers className={styles.skillIcon} />
              <h3>{t("about.collaboration")}</h3>
              <p>{t("about.collaborationDesc")}</p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <Link
            to="/projects"
            className={`${styles.btn} ${darkMode ? styles.darkBtn : ""}`}
          >
            {t("about.viewWork")}
          </Link>
          <Link
            to="/contact"
            className={`${styles.btn} ${styles.outline} ${
              darkMode ? styles.darkOutline : ""
            }`}
          >
            {t("about.letsConnect")}
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
