import AppLayout from "@/layouts/AppLayout";

export default function ProjectsPage() {
  return (
    <AppLayout>
      <div className="py-10">
        <h1 className="text-4xl font-bold">
          Projects
        </h1>

        <p className="mt-4 text-muted-foreground">
          Production-ready AI Engineering projects will appear here.
        </p>
      </div>
    </AppLayout>
  );
}