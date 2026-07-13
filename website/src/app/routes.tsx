import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/Home/HomePage";
import DesignSystemPage from "@/pages/DesignSystem/DesignSystemPage";
import LessonsPage from "@/pages/Lessons/LessonsPage";
import Lesson01Page from "@/pages/Lessons/Module01/Lesson01Page";
import LabsPage from "@/pages/Labs/LabsPage";
import ProjectsPage from "@/pages/Projects/ProjectsPage";
import AboutPage from "@/pages/About/AboutPage";
import PlaygroundPage from "@/pages/Playground/PlaygroundPage";
import MarkdownPage from "@/pages/Markdown";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/design-system",
    element: <DesignSystemPage />,
  },

  {
    path: "/lessons",
    element: <LessonsPage />,
  },

  {
    path: "/lessons/module-01/lesson-01",
    element: <Lesson01Page />,
  },

  {
    path: "/labs",
    element: <LabsPage />,
  },

  {
    path: "/projects",
    element: <ProjectsPage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/playground",
    element: <PlaygroundPage />,
  },
  {
  path: "/lessons/:slug",
  element: <MarkdownPage />,
  },
]);

export default router;