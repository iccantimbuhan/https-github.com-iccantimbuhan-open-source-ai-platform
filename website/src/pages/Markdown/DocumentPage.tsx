import { useParams } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import MarkdownRenderer from "@/components/documentation/MarkdownRenderer";

import { getDocumentBySlug } from "@/content/content";

export default function DocumentPage() {
  const { slug } = useParams();

  const document = getDocumentBySlug(slug ?? "");

  if (!document) {
    return (
      <AppLayout>
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold">
            Document Not Found
          </h1>

          <p className="mt-4 text-muted-foreground">
            We couldn't find a document with the slug:
          </p>

          <p className="mt-2 inline-block rounded-lg border bg-muted px-4 py-2 font-mono">
            {slug}
          </p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <article className="mx-auto max-w-4xl py-12">
        {/* Hero */}
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {document.metadata.type}
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">
            {document.metadata.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            {document.metadata.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {document.metadata.module && (
              <span className="rounded-full border px-4 py-2 text-sm">
                📚 {document.metadata.module}
              </span>
            )}

            {document.metadata.difficulty && (
              <span className="rounded-full border px-4 py-2 text-sm">
                🎯 {document.metadata.difficulty}
              </span>
            )}

            {document.metadata.duration && (
              <span className="rounded-full border px-4 py-2 text-sm">
                ⏱ {document.metadata.duration}
              </span>
            )}
          </div>
        </header>

        <hr className="mb-12" />

        <MarkdownRenderer content={document.content} />
      </article>
    </AppLayout>
  );
}