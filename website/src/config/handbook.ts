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
    title: "Module 01 • Introduction",
    slug: "module-01",
    lessons: [
      {
        title: "Lesson 01 • What is AI Engineering?",
        slug: "lesson-01",
      },
      {
        title: "Lesson 02 • AI Engineer Roadmap",
        slug: "lesson-02",
      },
      {
        title: "Lesson 03 • How LLMs Work",
        slug: "lesson-03",
      },
      {
        title: "Lesson 04 • Tokens",
        slug: "lesson-04",
      },
      {
        title: "Lesson 05 • Context Window",
        slug: "lesson-05",
      },
    ],
  },

  {
    title: "Module 02 • Local AI",
    slug: "module-02",
    lessons: [],
  },

  {
    title: "Module 03 • Prompt Engineering",
    slug: "module-03",
    lessons: [],
  },

  {
    title: "Module 04 • Embeddings",
    slug: "module-04",
    lessons: [],
  },

  {
    title: "Module 05 • Vector Databases",
    slug: "module-05",
    lessons: [],
  },

  {
    title: "Module 06 • RAG",
    slug: "module-06",
    lessons: [],
  },

  {
    title: "Module 07 • AI Agents",
    slug: "module-07",
    lessons: [],
  },

  {
    title: "Module 08 • MCP",
    slug: "module-08",
    lessons: [],
  },

  {
    title: "Module 09 • Production AI",
    slug: "module-09",
    lessons: [],
  },
];