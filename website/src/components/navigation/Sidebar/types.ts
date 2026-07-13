import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface SidebarItemData {
  title: string;
  href: string;

  icon?: ReactNode;

  badge?: string;

  disabled?: boolean;
}

export interface SidebarGroupData {
  title: string;

  icon?: LucideIcon;

  items: SidebarItemData[];
}