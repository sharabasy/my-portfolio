import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import profilePic from "../../assets/images/profile.JPEG";

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("home.title");
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <motion.section
      className={`${styles.home} ${language === "ar" ? styles.rtl : ""} ${
        darkMode ? styles.dark : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("home.greeting")} <span>Abdelrahman</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("home.subtitle")}
        </motion.h2>

        <motion.div
          className={`${styles.profileImage} ${darkMode ? styles.dark : ""}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img src={profilePic} alt={t("home.altText")} />
        </motion.div>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            to="/projects"
            className={`${styles.btn} ${darkMode ? styles.darkBtn : ""}`}
          >
            {t("home.viewWork")}
          </Link>
          <Link
            to="/contact"
            className={`${styles.btn} ${styles.outline} ${
              darkMode ? styles.darkOutline : ""
            }`}
          >
            {t("home.hireMe")}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
