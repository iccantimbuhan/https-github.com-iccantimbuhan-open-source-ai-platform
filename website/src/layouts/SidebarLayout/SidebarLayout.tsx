import type { ReactNode } from "react";

import MainLayout from "@/layouts/MainLayout";

import Container from "@/components/layout/Container";
import Sidebar from "@/components/navigation/Sidebar";

import type { SidebarGroupData } from "@/components/navigation/Sidebar";

interface SidebarLayoutProps {
  title: string;
  description?: string;
  navigation: SidebarGroupData[];
  children: ReactNode;
}

export default function SidebarLayout({
  title,
  description,
  navigation,
  children,
}: SidebarLayoutProps) {
  return (
    <MainLayout>
      <Container>
        <div className="flex min-h-[calc(100vh-8rem)] gap-10 py-10">
          {/* Sidebar */}
          <aside className="hidden w-72 shrink-0 lg:block">
            <Sidebar
              title={title}
              description={description}
              navigation={navigation}
            />
          </aside>

          {/* Content */}
          <main className="min-w-0 flex-1">
            {children}
          </main>
        </div>
      </Container>
    </MainLayout>
  );
}