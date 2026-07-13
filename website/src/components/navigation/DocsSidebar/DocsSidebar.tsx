import { Link } from "react-router-dom";

import { docsNavigation } from "@/config";
import { useActiveSection } from "@/hooks";

export default function DocsSidebar() {
  const activeSection = useActiveSection();

  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-72 shrink-0 overflow-y-auto border-r border-slate-200 bg-white px-6 py-8 lg:block">
      <div className="space-y-8">
        {docsNavigation.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.items.map((doc) => {
                const sectionId = doc.href.split("#")[1];
                const isActive = activeSection === sectionId;

                return (
                  <li key={doc.title}>
                    <Link
                      to={doc.href}
                      className={`block rounded-md px-2 py-1 text-sm transition-all duration-300 ease-in-out ${
                        isActive
                          ? "bg-indigo-100 shadow-sm font-medium text-indigo-700"
                          : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600 hover:translate-x-1"
                      }`}
                    >
                      {doc.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}