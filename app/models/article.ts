import type {
  Member,
} from "app/models";

export enum ArticleStatus {
  DRAFT = "DRAFT",
  PRIVATE = "PRIVATE",
  PUBLISHED = "PUBLISHED",
};

export type Article = {
  id: number,
  status: ArticleStatus,
  title: string,
  content: string,
  publishedAt: string,
  member: Member,
};

export type ArticleInfo = {
  total: number,
};
