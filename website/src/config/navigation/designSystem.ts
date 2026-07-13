import { Blocks, Palette } from "lucide-react";

import type { SidebarGroupData } from "@/components/navigation/Sidebar";

export const designSystemNavigation: SidebarGroupData[] = [
  {
    title: "Foundations",
    icon: Palette,
    items: [
      {
        title: "Typography",
        href: "/design-system#typography",
      },
      {
        title: "Colors",
        href: "/design-system#colors",
      },
      {
        title: "Spacing",
        href: "/design-system#spacing",
      },
      {
        title: "Radius",
        href: "/design-system#radius",
      },
      {
        title: "Shadows",
        href: "/design-system#shadows",
      },
      {
        title: "Icons",
        href: "/design-system#icons",
      },
    ],
  },

  {
    title: "Components",
    icon: Blocks,
    items: [
      {
        title: "Button",
        href: "/components#button",
      },
      {
        title: "Badge",
        href: "/components#badge",
      },
      {
        title: "Input",
        href: "/components#input",
      },
      {
        title: "Card",
        href: "/components#card",
      },
      {
        title: "Alert",
        href: "/components#alert",
      },
      {
        title: "Avatar",
        href: "/components#avatar",
      },
    ],
  },
];