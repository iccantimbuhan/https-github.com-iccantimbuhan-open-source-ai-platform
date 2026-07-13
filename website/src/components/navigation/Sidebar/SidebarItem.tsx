import { NavLink } from "react-router-dom";

import type { SidebarItemData } from "./types";

interface SidebarItemProps {
  item: SidebarItemData;
}

export default function SidebarItem({
  item,
}: SidebarItemProps) {
  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        [
          "group relative flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all",
          item.disabled && "pointer-events-none opacity-50",
          isActive
            ? "border-l-2 border-slate-900 bg-slate-50 pl-[10px] font-semibold text-slate-900"
            : "border-l-2 border-transparent pl-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900",
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      <span>{item.title}</span>

      {item.badge && (
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
}