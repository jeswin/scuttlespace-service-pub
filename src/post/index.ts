export * from "./create";

export interface IPost {
  id: string;
  author: string;
  externalAccountId: string;
  title: string;
  slug: string;
  markdown: string;
  html: string;
  categoryId: string;
  categoryName: string;
  tags: string;
  allowComments: boolean;
  publishedAt: number;
  createdAt: number;
}
