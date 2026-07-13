export interface DocsItem {
  title: string;
  href: string;
}

export interface DocsSection {
  title: string;
  items: DocsItem[];
}

export const docsNavigation: DocsSection[] = [
  {
    title: "Foundations",
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

  {
    title: "AI Engineering",
    items: [
      {
        title: "Lessons",
        href: "/lessons",
      },
      {
        title: "Labs",
        href: "/labs",
      },
      {
        title: "Projects",
        href: "/projects",
      },
    ],
  },
];