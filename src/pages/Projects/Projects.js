import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./Projects.module.scss";

const Projects = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("projects.title");
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <motion.section
      className={`${styles.projects} ${language === "ar" ? styles.rtl : ""} ${
        darkMode ? styles.dark : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>{t("projects.heading")}</h1>
      <div className={styles.projectGrid}>
        {["project1", "project2", "project3"].map((key) => {
          const repo = t(`projects.${key}.repo`);
          const demo = t(`projects.${key}.demo`);

          const isValidUrl = (url) => {
            try {
              new URL(url);
              return true;
            } catch (_) {
              return false;
            }
          };

          return (
            <motion.div
              key={key}
              className={`${styles.projectCard} ${
                darkMode ? styles.darkCard : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{t(`projects.${key}.title`)}</h3>
              <p>{t(`projects.${key}.description`)}</p>
              <div className={styles.buttonGroup}>
                {isValidUrl(repo) && (
                  <a href={repo} target="_blank" rel="noopener noreferrer">
                    <button className={styles.repoButton}>View Code</button>
                  </a>
                )}
                {isValidUrl(demo) && (
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <button className={styles.liveButton}>Live Demo</button>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
