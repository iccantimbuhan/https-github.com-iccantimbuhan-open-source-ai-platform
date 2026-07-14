import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function SidebarBrand() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 border-b px-6 py-5"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <BookOpen className="h-5 w-5" />
      </div>

      <div>
        <h1 className="text-base font-bold">
          AI Engineering
        </h1>

        <p className="text-sm text-muted-foreground">
          Handbook
        </p>
      </div>
    </Link>
  );
}