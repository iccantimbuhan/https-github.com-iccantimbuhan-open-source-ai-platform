import type { ReactNode } from "react";

interface SidebarFooterProps {
  children?: ReactNode;
}

export default function SidebarFooter({
  children,
}: SidebarFooterProps) {
  return (
    <footer className="border-t border-slate-200 pt-6">
      {children}
    </footer>
  );
}