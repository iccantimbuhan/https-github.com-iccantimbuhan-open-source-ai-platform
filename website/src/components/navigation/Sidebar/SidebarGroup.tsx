import SidebarItem from "./SidebarItem";

import type { SidebarGroupData } from "./types";

interface SidebarGroupProps {
  group: SidebarGroupData;
}

export default function SidebarGroup({
  group,
}: SidebarGroupProps) {
  const Icon = group.icon;

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2 px-3">
        {Icon && (
          <Icon
            size={16}
            className="text-slate-500"
          />
        )}

        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {group.title}
        </h3>
      </div>

      <div className="space-y-1">
        {group.items.map((item) => (
          <SidebarItem
            key={item.href}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}