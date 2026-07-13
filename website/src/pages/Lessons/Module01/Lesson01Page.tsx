import DocsLayout from "@/layouts/DocsLayout";

import Container from "@/components/layout/Container";

import LessonHero from "@/components/handbook/LessonHero";
import LessonOverview from "@/components/handbook/LessonOverview";
import LessonObjectives from "@/components/handbook/LessonObjectives";

export default function Lesson01Page() {
  return (
    <DocsLayout>
      <Container>
        <LessonHero
          module="Module 01"
          lesson="Lesson 01"
          title="What is AI Engineering?"
          description="Learn what AI Engineering is, how it differs from Machine Learning, and why it has become one of the most important software engineering disciplines."
          difficulty="Beginner"
          duration="15 minutes"
        />

        <LessonOverview>
          <p>
            Artificial Intelligence has evolved from research into practical
            software products used by millions of people every day.
          </p>

          <p>
            AI Engineering focuses on building, deploying, integrating, and
            maintaining AI-powered applications using modern software
            engineering practices.
          </p>

          <p>
            Throughout this handbook, you'll learn how to build AI systems
            using open-source models, local AI tools, Retrieval-Augmented
            Generation (RAG), AI agents, Model Context Protocol (MCP), and
            production-ready workflows.
          </p>
        </LessonOverview>

        <LessonObjectives
          objectives={[
            "Explain what AI Engineering is.",
            "Understand how AI Engineering differs from Machine Learning.",
            "Identify the responsibilities of an AI Engineer.",
            "Describe the roadmap of this AI Engineering Handbook.",
          ]}
        />
      </Container>
    </DocsLayout>
  );
}