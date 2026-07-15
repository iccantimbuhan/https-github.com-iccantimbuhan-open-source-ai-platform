import type { ReactNode } from "react";

import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/navigation/AppSidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppSidebar />

      <div className="ml-80 flex min-h-screen flex-col">
        <AppHeader />

        <main
          className="
            flex-1
            overflow-y-auto
            px-10
            py-8
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}