import { BookOpen, FlaskConical, Home, Palette, Rocket, Wrench, Info } from "lucide-react";

import { designSystemNavigation } from "./designSystem";
import { handbookNavigation } from "./handbook";

export const appNavigation = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },

  {
    title: "Design System",
    href: "/design-system",
    icon: Palette,
    navigation: designSystemNavigation,
  },

  {
    title: "AI Engineering",
    href: "/lessons",
    icon: BookOpen,
    navigation: handbookNavigation,
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