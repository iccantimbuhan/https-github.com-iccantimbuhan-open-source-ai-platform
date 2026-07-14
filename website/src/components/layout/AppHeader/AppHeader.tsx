import {
  BookOpen,
  Moon,
  Search,
} from "lucide-react";

export default function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-3 rounded-lg border px-3 py-2 text-sm text-muted-foreground">
        <Search className="h-4 w-4" />

        <span>Search...</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="rounded-lg p-2 transition hover:bg-muted"
        >
          <Moon className="h-5 w-5" />
        </button>

        <button
          type="button"
          className="rounded-lg p-2 transition hover:bg-muted"
        >
          <BookOpen className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}