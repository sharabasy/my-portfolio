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
          portfolio: {
            title: "Personal Portfolio",
            description:
              "A fully responsive personal portfolio website showcasing my skills, projects, and contact details. It features smooth animations, a dark mode, and a multilingual interface.",
            technologies: "React.js, SCSS, TailwindCSS, Framer Motion, i18n",
            repo: "https://github.com/sharabasy/portfolio",
            demo: "https://my-portfolio-amber-alpha-52.vercel.app/",
          },
          weatherApp: {
            title: "Get Weather App",
            description:
              "A React.js application that provides real-time weather information for any city worldwide. It features a dynamic search bar, responsive UI, and optimized API requests for efficient data fetching.",
            technologies:
              "React.js, Axios, OpenWeatherMap API, JavaScript, CSS",
            repo: "https://github.com/sharabasy/weatherapp.git",
            demo: "https://weatherapp-rho-rosy.vercel.app/",
          },
          adminDashboard: {
            title: "Admin Dashboard",
            description:
              "A feature-rich admin panel for managing e-commerce store operations. It includes role-based access control, real-time notifications, an interactive dashboard for analytics, dark mode, and multi-language support.",
            technologies:
              "React.js, Redux Toolkit, SCSS, TailwindCSS, Firebase, React Router, Axios",
            repo: "https://github.com/Cella-project/admin-panel.git",
            demo: "",
          },
          storeDashboard: {
            title: "Store Dashboard",
            description:
              "A comprehensive store management system that allows business owners to track inventory, manage orders, authenticate users, receive real-time push notifications, and function in offline mode.",
            technologies:
              "React.js, Redux Toolkit, SCSS, TailwindCSS, Firebase, React Router, Axios",
            repo: "https://github.com/Cella-project/Store-Panel.git",
            demo: "",
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
          portfolio: {
            title: "الموقع الشخصي",
            description:
              "موقع شخصي متجاوب بالكامل يعرض مهاراتي، مشاريعي، ومعلومات الاتصال بي. يحتوي على رسوم متحركة سلسة، وضع ليلي، ويدعم تعدد اللغات.",
            technologies: "React.js, SCSS, TailwindCSS, Framer Motion, i18n",
            repo: "https://github.com/sharabasy/portfolio",
            demo: "https://my-portfolio-amber-alpha-52.vercel.app/",
          },
          weatherApp: {
            title: "تطبيق الطقس",
            description:
              "تطبيق React.js يعرض معلومات الطقس في الوقت الفعلي لأي مدينة حول العالم. يحتوي على شريط بحث ديناميكي، واجهة مستخدم متجاوبة، وطلبات API محسّنة لجلب البيانات بكفاءة.",
            technologies:
              "React.js, Axios, OpenWeatherMap API, JavaScript, CSS",
            repo: "https://github.com/sharabasy/weatherapp.git",
            demo: "https://weatherapp-rho-rosy.vercel.app/",
          },
          adminDashboard: {
            title: "لوحة التحكم الإدارية",
            description:
              "لوحة تحكم متقدمة لإدارة متاجر التجارة الإلكترونية. تتضمن التحكم في صلاحيات المستخدمين، إشعارات فورية، لوحة تحكم تحليلية تفاعلية، دعم للوضع الليلي، ودعم تعدد اللغات.",
            technologies:
              "React.js, Redux Toolkit, SCSS, TailwindCSS, Firebase, React Router, Axios",
            repo: "https://github.com/Cella-project/admin-panel.git",
            demo: "",
          },
          storeDashboard: {
            title: "لوحة تحكم المتجر",
            description:
              "نظام شامل لإدارة المتاجر يمكن أصحاب الأعمال من تتبع المخزون، إدارة الطلبات، المصادقة على المستخدمين، استقبال الإشعارات الفورية، والعمل في وضع عدم الاتصال.",
            technologies:
              "React.js, Redux Toolkit, SCSS, TailwindCSS, Firebase, React Router, Axios",
            repo: "https://github.com/Cella-project/Store-Panel.git",
            demo: "",
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
