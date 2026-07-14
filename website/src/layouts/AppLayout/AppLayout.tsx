import type { ReactNode } from "react";

import AppSidebar from "@/components/navigation/AppSidebar";
import AppHeader from "@/components/layout/AppHeader";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <AppHeader />

        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}