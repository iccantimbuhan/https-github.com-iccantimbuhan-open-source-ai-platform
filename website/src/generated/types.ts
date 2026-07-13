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

  module?: string;

  order: number;

  description: string;

  difficulty?: string;

  duration?: string;

  tags?: string[];

  previous?: string;

  next?: string;
}

export interface ContentDocument {
  metadata: ContentMetadata;

  content: string;

  source: string;
}