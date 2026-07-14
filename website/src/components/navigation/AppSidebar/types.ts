import type { LucideIcon } from "lucide-react";

export interface AppSidebarItem {
  title: string;
  href: string;

  icon?: LucideIcon;

  badge?: string;

  children?: AppSidebarItem[];
}

export interface AppSidebarSection {
  title: string;

  icon?: LucideIcon;

  items: AppSidebarItem[];

  collapsible?: boolean;

  defaultExpanded?: boolean;
}