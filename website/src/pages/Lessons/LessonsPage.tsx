import { Link } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import Container from "@/components/layout/Container";

import { getAllDocuments } from "@/content/content";

export default function LessonsPage() {
  const documents = getAllDocuments();

  return (
    <MainLayout>
      <Container>
        <div className="py-10">
          <h1 className="mb-3 text-4xl font-bold">
            AI Engineering Handbook
          </h1>

          <p className="mb-10 text-muted-foreground">
            {documents.length} documents available.
          </p>

          <div className="space-y-4">
            {documents.map((doc) => (
              <Link
                key={doc.metadata.slug}
                to={`/lessons/${doc.metadata.slug}`}
                className="block rounded-xl border p-5 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {doc.metadata.title}
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {doc.metadata.description}
                    </p>
                  </div>

                  <span className="rounded-full border px-3 py-1 text-xs font-medium uppercase">
                    {doc.metadata.type}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}