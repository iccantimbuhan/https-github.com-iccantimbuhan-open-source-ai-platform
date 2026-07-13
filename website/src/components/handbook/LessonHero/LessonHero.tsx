import { BookOpen, Clock3, GraduationCap, Layers } from "lucide-react";

interface LessonHeroProps {
  module: string;
  lesson: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
}

export default function LessonHero({
  module,
  lesson,
  title,
  description,
  difficulty,
  duration,
}: LessonHeroProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
            {module}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            {lesson}
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
            <GraduationCap size={18} />
            <span>{difficulty}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
            <Clock3 size={18} />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
            <BookOpen size={18} />
            <span>Reading Lesson</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
            <Layers size={18} />
            <span>AI Engineering Handbook</span>
          </div>
        </div>
      </div>
    </section>
  );
}