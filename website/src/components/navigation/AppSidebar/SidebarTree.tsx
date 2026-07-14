import { ChevronDown } from "lucide-react";

export default function SidebarTree() {
  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-muted">
      <span>Handbook</span>

      <ChevronDown className="h-4 w-4" />
    </div>
  );
}