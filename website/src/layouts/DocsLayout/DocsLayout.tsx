import type { ReactNode } from "react";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DocsSidebar from "@/components/navigation/DocsSidebar";

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({
  children,
}: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto flex max-w-7xl">
        <DocsSidebar />

        <div className="min-w-0 flex-1 px-8 py-10">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}