import type { SidebarGroupData } from "@/components/navigation/Sidebar";

import { handbookNavigation } from "./handbook";

export const handbookSidebarNavigation: SidebarGroupData[] =
  handbookNavigation.map((module) => ({
    title: module.title,

    items: module.lessons.map((lesson) => ({
      title: lesson.title,

      href: `/lessons/${lesson.slug}`,
    })),
  }));