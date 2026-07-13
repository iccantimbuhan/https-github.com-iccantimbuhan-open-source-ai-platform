import type { ReactNode } from "react";

interface ShowcaseSectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function ShowcaseSection({
  id,
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 space-y-8 border-b border-slate-200 pb-16"
    >
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="max-w-3xl leading-7 text-slate-600">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}