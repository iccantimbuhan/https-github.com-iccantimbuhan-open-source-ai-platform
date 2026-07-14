import AppLayout from "@/layouts/AppLayout";

import Container from "@/components/layout/Container";
import Grid from "@/components/layout/Grid";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Surface from "@/components/layout/Surface";

export default function HomePage() {
  return (
    <AppLayout>
      <Container>
        <Section>
          <Stack gap="lg">
            <div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                AI Engineering Platform
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight">
              Welcome to the AI Engineering Handbook
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              Learn modern AI Engineering through structured lessons,
              interactive labs, production-ready projects, and a complete
              knowledge base powered by our custom Knowledge Engine.
            </p>
          </Stack>
        </Section>

        <Section>
          <Stack gap="md">
            <h2 className="text-3xl font-semibold">
              Platform Overview
            </h2>

            <Grid columns={3}>
              <Surface>
                <h3 className="mb-2 font-semibold">
                  📚 Handbook
                </h3>

                <p className="text-sm text-muted-foreground">
                  Structured AI lessons generated from Markdown.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 font-semibold">
                  🧪 Labs
                </h3>

                <p className="text-sm text-muted-foreground">
                  Practice concepts with guided exercises.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 font-semibold">
                  🚀 Projects
                </h3>

                <p className="text-sm text-muted-foreground">
                  Build production-ready AI applications.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 font-semibold">
                  🎨 Design System
                </h3>

                <p className="text-sm text-muted-foreground">
                  Shared UI components powering the platform.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 font-semibold">
                  🤖 Knowledge Engine
                </h3>

                <p className="text-sm text-muted-foreground">
                  Automatically generates navigation, content, and metadata.
                </p>
              </Surface>

              <Surface>
                <h3 className="mb-2 font-semibold">
                  🔍 Search
                </h3>

                <p className="text-sm text-muted-foreground">
                  Coming soon...
                </p>
              </Surface>
            </Grid>
          </Stack>
        </Section>
      </Container>
    </AppLayout>
  );
}