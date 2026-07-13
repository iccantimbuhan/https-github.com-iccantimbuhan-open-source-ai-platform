import { CheckCircle2 } from "lucide-react";

interface LessonObjectivesProps {
  objectives: string[];
}

export default function LessonObjectives({
  objectives,
}: LessonObjectivesProps) {
  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <div className="mb-8">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
          Learning Objectives
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">
          By the end of this lesson you will be able to
        </h2>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
          These are the key skills and concepts you should understand after
          completing this lesson.
        </p>
      </div>

      <div className="grid gap-4">
        {objectives.map((objective) => (
          <div
            key={objective}
            className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <CheckCircle2
              className="mt-1 text-green-600"
              size={22}
            />

            <p className="text-slate-700">{objective}</p>
          </div>
        ))}
      </div>
    </section>
  );
}