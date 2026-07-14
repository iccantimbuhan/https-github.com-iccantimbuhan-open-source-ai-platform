import AppLayout from "@/layouts/AppLayout";

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="py-10">
        <h1 className="text-4xl font-bold">
          About
        </h1>

        <p className="mt-4 text-muted-foreground">
          Learn more about the AI Engineering Handbook platform,
          its architecture, and the technologies behind it.
        </p>
      </div>
    </AppLayout>
  );
}