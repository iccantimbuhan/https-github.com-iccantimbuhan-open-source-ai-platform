import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
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
  const [expanded, setExpanded] =
    useState(defaultExpanded);

  const hasChildren = Boolean(children);

  return (
    <div className="space-y-1">
      <div
        className="flex items-center rounded-lg hover:bg-muted"
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={() =>
              setExpanded(!expanded)
            }
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-medium"
          >
            {expanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}

            <span>{title}</span>
          </button>
        ) : (
          <Link
            to={href ?? "#"}
            className="flex w-full items-center px-3 py-2 text-sm"
          >
            {title}
          </Link>
        )}
      </div>

      {expanded && children && (
        <div className="ml-5 border-l pl-3">
          {children}
        </div>
      )}
    </div>
  );
}