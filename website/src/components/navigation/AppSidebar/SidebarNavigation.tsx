import { Link } from "react-router-dom";

import { appNavigation } from "@/config/navigation/appNavigation";
import handbookNavigation from "@/generated/navigation.json";

import SidebarNode from "./SidebarNode";

export default function SidebarNavigation() {
  return (
    <nav className="flex-1 overflow-y-auto px-3 py-4">
      <div className="space-y-2">
        {appNavigation.map((item) => {
          if (item.title === "Handbook") {
            return (
              <SidebarNode
                key={item.title}
                title={item.title}
                defaultExpanded
              >
                {handbookNavigation.map((group) => (
                  <SidebarNode
                    key={group.title}
                    title={group.title}
                    defaultExpanded
                  >
                    {group.items.map((lesson) => (
                      <SidebarNode
                        key={lesson.href}
                        title={lesson.title}
                        href={lesson.href}
                      />
                    ))}
                  </SidebarNode>
                ))}
              </SidebarNode>
            );
          }

          return (
            <Link
              key={item.title}
              to={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              <item.icon className="h-4 w-4" />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}