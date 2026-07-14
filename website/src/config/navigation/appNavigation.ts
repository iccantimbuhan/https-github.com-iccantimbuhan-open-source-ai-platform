import {
  BookOpen,
  FlaskConical,
  Home,
  Info,
  Palette,
  Rocket,
  Wrench,
} from "lucide-react";

export const appNavigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },

  {
    title: "Handbook",
    href: "/lessons",
    icon: BookOpen,
  },

  {
    title: "Labs",
    href: "/labs",
    icon: FlaskConical,
  },

  {
    title: "Projects",
    href: "/projects",
    icon: Rocket,
  },

  {
    title: "Design System",
    href: "/design-system",
    icon: Palette,
  },

  {
    title: "Playground",
    href: "/playground",
    icon: Wrench,
  },

  {
    title: "About",
    href: "/about",
    icon: Info,
  },
];