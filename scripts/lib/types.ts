export type ContentType =
  | "roadmap"
  | "lesson"
  | "lab"
  | "project"
  | "resource"
  | "glossary";

export interface ContentMetadata {
  title: string;
  slug: string;

  type: ContentType;

  order: number;

  module?: string;

  description: string;

  difficulty?: string;

  duration?: string;

  tags?: string[];

  prerequisites?: string[];

  previous?: string;

  next?: string;
}

export interface ContentDocument {
  metadata: ContentMetadata;

  content: string;

  source: string;
}