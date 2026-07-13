export type ContentType =
  | "roadmap"
  | "lesson"
  | "lab"
  | "project"
  | "glossary";

export type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface ContentFrontmatter {
  title: string;

  slug: string;

  type: ContentType;

  order: number;

  module: string;

  description: string;

  difficulty?: Difficulty;

  duration?: string;

  tags?: string[];

  prerequisites?: string[];

  previous?: string;

  next?: string;
}

export interface ContentDocument {
  frontmatter: ContentFrontmatter;

  content: string;

  filepath: string;
}