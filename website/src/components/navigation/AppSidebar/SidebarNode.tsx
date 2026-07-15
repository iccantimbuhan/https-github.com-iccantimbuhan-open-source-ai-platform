import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface SidebarNodeProps {
  title: string;
  href?: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function SidebarNode({
  title,
  href,
  children,
  defaultExpanded = false,
}: SidebarNodeProps) {
  const location = useLocation();

  const [expanded, setExpanded] =
    useState(defaultExpanded);

  const hasChildren = Boolean(children);

  const isActive =
    href !== undefined &&
    location.pathname === href;

  return (
    <div className="space-y-1">
      {hasChildren ? (
        <>
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              px-3
              py-2.5
              text-left
              transition-all
              duration-200
              hover:bg-slate-100
            "
          >
            <span className="text-xs font-medium text-slate-700">
              {title}
            </span>

            <ChevronRight
              className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                expanded ? "rotate-90" : ""
              }`}
            />
          </button>

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              ease-in-out
              ${
                expanded
                  ? "max-h-[1200px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="ml-4 mt-2 border-l border-slate-200 pl-4">
              {children}
            </div>
          </div>
        </>
      ) : (
        <Link
          to={href ?? "#"}
          className={`
            group
            relative
            flex
            items-center
            gap-3
            rounded-xl
            px-3
            py-2.5
            text-sm
            transition-all
            duration-200

            ${
              isActive
                ? "bg-slate-100 text-slate-900"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }
          `}
        >
          {isActive && (
            <span
              className="
                absolute
                left-0
                top-2
                bottom-2
                w-0.5
                rounded-r-full
                bg-slate-900
              "
            />
          )}

          <span
            className={`
              h-2
              w-2
              rounded-full
              transition-colors

              ${
                isActive
                  ? "bg-slate-900"
                  : "bg-slate-300 group-hover:bg-slate-500"
              }
            `}
          />

          <span className="font-medium">
            {title}
          </span>
        </Link>
      )}
    </div>
  );
}