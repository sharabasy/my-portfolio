import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];
