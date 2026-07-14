import { BookOpen } from "lucide-react";

export default function SidebarFooter() {
  return (
    <footer className="mt-auto border-t p-4">
      <a
        href="https://github.com/iccantimbuhan/AI-Engineering-Handbook"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
      >
        <BookOpen className="h-4 w-4" />

        <span>GitHub Repository</span>
      </a>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Version 2.0
      </p>
    </footer>
  );
}