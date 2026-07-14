import AppLayout from "@/layouts/AppLayout";

export default function PlaygroundPage() {
  return (
    <AppLayout>
      <div className="space-y-8 py-10">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Playground
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            A dedicated environment for developing, testing, and experimenting
            with components before integrating them into the AI Engineering
            Handbook.
          </p>
        </div>

        <div className="rounded-3xl border p-10 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Playground Ready 🎉
          </h2>

          <p className="mt-4 text-muted-foreground">
            This page is now powered by the new AppLayout.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}