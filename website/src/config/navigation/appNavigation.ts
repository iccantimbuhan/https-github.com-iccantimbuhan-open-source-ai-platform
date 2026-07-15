import {
  BookOpen,
  Bot,
  Briefcase,
  FlaskConical,
  Home,
  Info,
  Palette,
} from "lucide-react";

export const appNavigation = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },

  {
    title: "Projects",
    href: "/projects",
    icon: Briefcase,
  },

  {
    title: "AI Automation",
    href: "/automation",
    icon: Bot,
  },

  {
    title: "Resources",
    href: "/resources",
    icon: BookOpen,
  },

  {
    title: "About",
    href: "/about",
    icon: Info,
  },

  // Secondary

  {
    title: "Labs",
    href: "/labs",
    icon: FlaskConical,
  },

  {
    title: "Design System",
    href: "/design-system",
    icon: Palette,
  },
];