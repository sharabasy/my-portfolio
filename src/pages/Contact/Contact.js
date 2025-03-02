import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import styles from "./Contact.module.scss";
import { useSelector } from "react-redux";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    document.title = t("contact.title");
    window.scrollTo(0, 0);
  }, [t]);

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: t("contact.email"),
      link: "mailto:abdelrahmanelsharabasy00@gmail.com",
      text: "abdelrahmanelsharabasy00@gmail.com",
    },
    {
      icon: <FaPhone style={{ transform: "scaleX(-1)" }} />,
      label: t("contact.phone"),
      link: "tel:+201200762698",
      text: "+20 1200762698",
    },
    {
      icon: <FaWhatsapp />,
      label: t("contact.whatsapp"),
      link: "https://wa.me/201200762698",
      text: t("contact.whatsapp"),
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/abdelrahman-el-sharabasy-91532a279",
      text: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/sharabasy",
      text: "GitHub",
    },
  ];

  return (
    <motion.section
      className={`${styles.contact} ${
        i18n.language === "ar" ? styles.rtl : ""
      } ${darkMode ? styles.dark : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>{t("contact.heading")}</h1>

      <div className={styles.contactMethods}>
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.contactItem} ${
              darkMode ? styles.darkCard : ""
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.open(item.link, "_blank")}
          >
            {item.icon}
            {item.label && `${item.label}:`}
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
