import SidebarLayout from "@/layouts/SidebarLayout";

import { designSystemNavigation } from "@/config/navigation";

export default function PlaygroundPage() {
  return (
    <SidebarLayout
      title="Playground"
      description="Build and test reusable UI components."
      navigation={designSystemNavigation}
    >
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Playground
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            A dedicated environment for developing, testing, and experimenting
            with components before integrating them into the AI Engineering
            Handbook.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Sidebar Layout Working 🎉
          </h2>

          <p className="mt-4 text-slate-600">
            This page is now powered entirely by the reusable SidebarLayout.
          </p>
        </div>
      </div>
    </SidebarLayout>
  );
}