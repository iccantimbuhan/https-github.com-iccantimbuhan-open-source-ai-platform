import SidebarFooter from "./SidebarFooter";
import SidebarGroup from "./SidebarGroup";
import SidebarHeader from "./SidebarHeader";

import type { SidebarGroupData } from "./types";

interface SidebarProps {
  title: string;
  description?: string;
  navigation: SidebarGroupData[];
}

export default function Sidebar({
  title,
  description,
  navigation,
}: SidebarProps) {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-72 shrink-0 overflow-y-auto border-r border-slate-200 bg-white lg:block">
      <div className="flex min-h-full flex-col p-6">
        <SidebarHeader
          title={title}
          description={description}
        />

        <div className="mt-8 flex-1 space-y-8">
          {navigation.map((group) => (
            <SidebarGroup
              key={group.title}
              group={group}
            />
          ))}
        </div>

        <SidebarFooter>
          <p className="text-xs text-slate-500">
            AI Engineering Handbook v1.0
          </p>
        </SidebarFooter>
      </div>
    </aside>
  );
}