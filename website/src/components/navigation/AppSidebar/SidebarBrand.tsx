import { Command } from "lucide-react";
import { Link } from "react-router-dom";

export default function SidebarBrand() {
  return (
    <Link
      to="/"
      className="
        border-b
        border-slate-200/70
        px-6
        py-8
        transition-colors
        hover:bg-slate-50
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >
          <Command className="h-5 w-5 text-slate-700" />
        </div>

        <div className="min-w-0">
          <h1 className="text-base font-semibold tracking-tight text-slate-900">
            Ian Cantimbuhan
          </h1>

          <div className="mt-1 space-y-0.5">
            <p className="text-sm text-slate-600">
              Software Engineer
            </p>

            <p className="text-sm text-slate-500">
              AI Automation
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}