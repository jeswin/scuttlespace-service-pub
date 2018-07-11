import * as psy from "psychopiggy";
import { ServiceResult, ValidResult } from "scuttlespace-api-common";
import { getPool } from "../pool";

export interface ICreatePostArgs {
  allowComments: boolean;
  categoryId: string;
  externalId: string;
  markdown: string;
  notifications: string;
  slug: string;
  tags: string[];
  title: string;
}

export async function createPost(
  args: ICreatePostArgs
): Promise<ServiceResult<number>> {
  const pool = getPool();

  const params = new psy.Params({
    allow_comments: args.allowComments,
    category_id: args.categoryId,
    external_id: args.externalId,
    markdown: args.markdown,
    notifications: args.notifications,
    slug: args.slug,
    tags: args.tags.join(","),
    title: args.title
  });

  await pool.query(
    `
    INSERT INTO pub_post(${params.columns()})
    VALUES(${params.ids()})`,
    params.values()
  );

  return new ValidResult(10);
}
