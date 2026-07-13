interface LessonOverviewProps {
  children: React.ReactNode;
}

export default function LessonOverview({
  children,
}: LessonOverviewProps) {
  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <div className="mb-8">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
          Overview
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">
          What you'll learn
        </h2>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
          This lesson introduces the topic and explains why it is important
          before diving into technical concepts.
        </p>
      </div>

      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </section>
  );
}