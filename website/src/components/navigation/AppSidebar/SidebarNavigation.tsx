import { appNavigation } from "@/config/navigation/appNavigation";
import handbookNavigation from "@/generated/navigation.json";

import SidebarNode from "./SidebarNode";
import SidebarSection from "./SidebarSection";

export default function SidebarNavigation() {
  const portfolioItems = appNavigation.filter((item) =>
    [
      "Home",
      "Projects",
      "AI Automation",
      "Resources",
    ].includes(item.title)
  );

  const developerItems = appNavigation.filter((item) =>
    ["Labs", "Design System"].includes(item.title)
  );

  const aboutItem = appNavigation.find(
    (item) => item.title === "About"
  );

  return (
    <nav
      className="flex-1 overflow-y-auto px-5 py-7"
      style={{
        scrollbarGutter: "stable",
      }}
    >
      <SidebarSection title="Portfolio">
        {portfolioItems.map((item) =>
          item.title === "Resources" ? (
            <SidebarNode
              key={item.title}
              title={item.title}
              defaultExpanded={false}
            >
              <div className="space-y-5 pl-1">
                {handbookNavigation.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {group.title}
                    </h3>

                    <div className="space-y-1 border-l border-slate-200 pl-3">
                      {group.items.map((lesson) => (
                        <SidebarNode
                          key={lesson.href}
                          title={lesson.title}
                          href={lesson.href}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SidebarNode>
          ) : (
            <SidebarNode
              key={item.title}
              title={item.title}
              href={item.href}
            />
          )
        )}
      </SidebarSection>

      <div className="my-6 border-t border-slate-200" />

      <SidebarSection title="Developer">
        {developerItems.map((item) => (
          <SidebarNode
            key={item.title}
            title={item.title}
            href={item.href}
          />
        ))}
      </SidebarSection>

      <div className="my-6 border-t border-slate-200" />

      {aboutItem && (
        <SidebarNode
          title={aboutItem.title}
          href={aboutItem.href}
        />
      )}
    </nav>
  );
}