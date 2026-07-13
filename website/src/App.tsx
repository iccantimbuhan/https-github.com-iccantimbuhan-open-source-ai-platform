import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Grid from "@/components/layout/Grid";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Container>
        <Section>
          <Stack gap="lg">
            <h1 className="text-5xl font-bold">
              AI Engineering Handbook
            </h1>

            <p className="text-lg text-slate-600">
              Building an Open Source AI Engineering Platform.
            </p>
          </Stack>
        </Section>

        <Section>
          <Grid columns={3}>
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              Lesson 1
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              Lesson 2
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              Lesson 3
            </div>
          </Grid>
        </Section>
      </Container>
    </main>
  );
}

export default App;