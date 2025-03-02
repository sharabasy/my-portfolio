import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          portfolioFirst: "My",
          portfolioSecond: "Portfolio",
          home: "Home",
          about: "About",
          projects: "Projects",
          skills: "Skills",
          contact: "Contact",
          toggleTheme: "Toggle Dark Mode",
          switchLanguage: "Switch Language",
        },
        home: {
          title: "Home | My Portfolio",
          greeting: "Hi, I'm",
          subtitle:
            "Software Engineer | Front-End Developer | React.js Enthusiast 🚀",
          altText: "Profile Picture",
          viewWork: "View My Work",
          hireMe: "Hire Me",
        },
        about: {
          title: "About Me | My Portfolio",
          heading: "About Me",
          intro:
            "A passionate Front-End Developer specialized in building engaging, user-friendly web applications.",
          skills:
            "My expertise includes React.js, JavaScript, HTML, CSS, SASS, and API integrations.",
          teamwork:
            "I enjoy working in collaborative environments and solving challenging problems with scalable solutions.",
          skillsTitle: "Skills Overview",
          frontend: "Front-End Development",
          frontendDesc: "React.js, HTML, CSS, JavaScript, SASS",
          projects: "Project Experience",
          projectsDesc:
            "Developed e-commerce platforms, interactive dashboards, and dynamic websites.",
          problemSolving: "Problem Solving",
          problemSolvingDesc:
            "Logical thinking, debugging, and optimizing performance.",
          collaboration: "Collaboration",
          collaborationDesc:
            "Worked with designers, backend developers, and product teams.",
          viewWork: "See My Projects",
          letsConnect: "Let's Connect",
        },
        projects: {
          title: "Projects | My Portfolio",
          heading: "My Projects",
          project1: {
            title: "Weather App",
            description:
              "A React-based app that fetches real-time weather data using OpenWeatherMap API.",
            repo: "https://github.com/sharabasy/weatherapp.git",
            demo: "https://weatherapp-rho-rosy.vercel.app/",
          },
          project2: {
            title: "Admin Dashboard",
            description:
              "A React & Redux-powered admin panel with API integration and analytics.",
          },
          project3: {
            title: "Portfolio Website",
            description:
              "A responsive, multi-language portfolio built with React.js and Framer Motion.",
            repo: "https://github.com/sharabasy/my-portfolio.git",
          },
        },
        skills: {
          title: "Skills | My Portfolio",
          heading: "My Skills",
          react: "React.js",
          javascript: "JavaScript",
          api: "RESTful APIs",
          responsive: "Responsive Design",
          html: "HTML5",
          css: "CSS3",
          sass: "SASS",
          redux: "Redux",
        },
        contact: {
          title: "Contact Me | My Portfolio",
          heading: "Get in Touch",
          email: "Email",
          phone: "Phone",
          whatsapp: "WhatsApp",
          github: "GitHub",
          linkedin: "LinkedIn",
        },
        footer: {
          text: "© 2025 Abdelrahman El Sharabasy ❤️.",
          text2: "All Rights Reserved.",
        },
      },
    },
    ar: {
      translation: {
        navbar: {
          portfolioFirst: "ملفي",
          portfolioSecond: "الشخصي",
          home: "الرئيسية",
          about: "من أنا",
          projects: "المشاريع",
          skills: "المهارات",
          contact: "تواصل",
          toggleTheme: "تبديل الوضع الداكن",
          switchLanguage: "تغيير اللغة",
        },
        home: {
          title: "الرئيسية | ملفي الشخصي",
          greeting: "مرحبًا، أنا",
          subtitle: "مهندس برمجيات | مطور واجهات أمامية | محب لـ React.js 🚀",
          altText: "صورة الملف الشخصي",
          viewWork: "مشاريعي",
          hireMe: "وظفني",
        },
        about: {
          title: "من أنا | ملفي الشخصي",
          heading: "من أنا",
          intro: "مطور واجهات أمامية متخصص في بناء تطبيقات ويب تفاعلية وسلسة.",
          skills:
            "أتقن React.js و JavaScript و HTML و CSS و SASS وتكامل الـ API.",
          teamwork:
            "أحب العمل الجماعي وحل المشكلات الصعبة باستخدام حلول قابلة للتطوير.",
          skillsTitle: "لمحة عن المهارات",
          frontend: "تطوير الواجهات الأمامية",
          frontendDesc: "React.js, HTML, CSS, JavaScript, SASS",
          projects: "تجربة المشاريع",
          projectsDesc:
            "تطوير منصات التجارة الإلكترونية ولوحات التحكم التفاعلية.",
          problemSolving: "حل المشكلات",
          problemSolvingDesc: "التفكير المنطقي وتصحيح الأخطاء وتحسين الأداء.",
          collaboration: "التعاون",
          collaborationDesc: "التنسيق مع المصممين والمطورين وفرق المنتجات.",
          viewWork: "رؤية مشاريعي",
          letsConnect: "تواصل معي",
        },
        projects: {
          title: "المشاريع | ملفي الشخصي",
          heading: "مشاريعي",
          project1: {
            title: "تطبيق الطقس",
            description:
              "تطبيق React.js يجلب بيانات الطقس الحية باستخدام OpenWeatherMap API.",
            repo: "https://github.com/sharabasy/weatherapp.git",
            demo: "https://weatherapp-rho-rosy.vercel.app/",
          },
          project2: {
            title: "لوحة تحكم المشرف",
            description:
              "لوحة تحكم مبنية بـ React و Redux مع تكامل API وتحليلات.",
          },
          project3: {
            title: "موقعي الشخصي",
            description:
              "ملف شخصي متعدد اللغات ومبني بـ React.js و Framer Motion.",
            repo: "https://github.com/sharabasy/my-portfolio.git",
          },
        },
        skills: {
          title: "المهارات | ملفي الشخصي",
          heading: "مهاراتي",
          react: "React.js",
          javascript: "JavaScript",
          api: "RESTful APIs",
          responsive: "Responsive Design",
          html: "HTML5",
          css: "CSS3",
          sass: "SASS",
          redux: "Redux",
        },
        contact: {
          title: "تواصل معي | ملفي الشخصي",
          heading: "ابقَ على تواصل",
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف",
          whatsapp: "WhatsApp",
          github: "GitHub",
          linkedin: "LinkedIn",
        },
        footer: {
          text: "© 2025 عبدالرحمن الشرباصى ❤️.",
          text2: "جميع الحقوق محفوظة.",
        },
      },
    },
  },
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
