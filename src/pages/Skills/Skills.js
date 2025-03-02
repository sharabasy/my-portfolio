import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaDatabase, FaMobileAlt, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import styles from "./Skills.module.scss";

const skillData = [
  { key: "html", icon: <FaHtml5 className={styles.skillIcon} /> },
  { key: "css", icon: <FaCss3Alt className={styles.skillIcon} /> },
  { key: "sass", icon: <FaSass className={styles.skillIcon} /> },
  { key: "javascript", icon: <FaJs className={styles.skillIcon} /> },
  { key: "react", icon: <FaReact className={styles.skillIcon} /> },
  { key: "redux", icon: <SiRedux className={styles.skillIcon} /> },
  { key: "api", icon: <FaDatabase className={styles.skillIcon} /> },
  { key: "responsive", icon: <FaMobileAlt className={styles.skillIcon} /> },
];

const Skills = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("skills.title");
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <motion.section
      className={`${styles.skills} ${language === "ar" ? styles.rtl : ""} ${
        darkMode ? styles.dark : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>{t("skills.heading")}</h1>
      <div className={styles.skillGrid}>
        {skillData.map(({ key, icon }) => (
          <motion.div
            key={key}
            className={`${styles.skillCard} ${darkMode ? styles.darkCard : ""}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
            <p>{t(`skills.${key}`)}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
