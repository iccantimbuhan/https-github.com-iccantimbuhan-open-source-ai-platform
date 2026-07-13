import { BookOpen } from "lucide-react";

interface SidebarHeaderProps {
  title: string;
  description?: string;
}

export default function SidebarHeader({
  title,
  description,
}: SidebarHeaderProps) {
  return (
    <header className="border-b border-slate-200 pb-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <BookOpen size={20} />
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-slate-900">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}