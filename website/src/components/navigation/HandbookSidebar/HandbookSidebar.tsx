import { Link } from "react-router-dom";

import { handbookNavigation } from "@/config";

export default function HandbookSidebar() {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-80 shrink-0 overflow-y-auto border-r border-slate-200 bg-white px-6 py-8 lg:block">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            AI Engineering Handbook
          </h2>
        </div>

        {handbookNavigation.map((module) => (
          <div key={module.slug} className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              {module.title}
            </h3>

            {module.lessons.length > 0 && (
              <ul className="space-y-2 border-l border-slate-200 pl-4">
                {module.lessons.map((lesson) => (
                  <li key={lesson.slug}>
                    <Link
                      to={`/lessons/${module.slug}/${lesson.slug}`}
                      className="block rounded-md px-2 py-1 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}