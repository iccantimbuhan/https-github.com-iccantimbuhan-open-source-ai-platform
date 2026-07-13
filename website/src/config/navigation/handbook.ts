export interface LessonItem {
  title: string;
  slug: string;
}

export interface ModuleItem {
  title: string;
  slug: string;
  lessons: LessonItem[];
}

export const handbookNavigation: ModuleItem[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    lessons: [
      {
        title: "AI Engineering Bootcamp",
        slug: "bootcamp-roadmap",
      },
    ],
  },

  {
    title: "Module 01 • Local AI",
    slug: "local-ai",
    lessons: [
      {
        title: "Ollama",
        slug: "ollama",
      },
      {
        title: "Large Language Models",
        slug: "large-language-models",
      },
      {
        title: "How AI Learns",
        slug: "how-ai-learns",
      },
      {
        title: "Neural Networks",
        slug: "neural-networks",
      },
      {
        title: "Parameters",
        slug: "parameters",
      },
      {
        title: "Tokens",
        slug: "tokens",
      },
      {
        title: "Context Window",
        slug: "context-window",
      },
      {
        title: "Quantization",
        slug: "quantization",
      },
      {
        title: "GGUF",
        slug: "gguf",
      },
    ],
  },
];