export default async function setup() {
  const category = [
    `CREATE TABLE pub_category ( 
      rowid BIGSERIAL PRIMARY KEY,
      id VARCHAR(64) NOT NULL, 
      external_account_id VARCHAR(64) NOT NULL REFERENCES account(external_id),
      name VARCHAR(64) NOT NULL,
      created_at BIGINT NOT NULL
    )`,
    `CREATE INDEX pub_category_id_index ON pub_post(id)`,
    `CREATE INDEX pub_category_external_account_id_index ON pub_post(external_account_id)`
  ];

  const post = [
    `CREATE TABLE pub_post (
      rowid BIGSERIAL PRIMARY KEY,
      id VARCHAR(64) NOT NULL,
      external_account_id VARCHAR(64) NOT NULL REFERENCES account(external_id),
      title VARCHAR(256) NOT NULL,
      slug VARCHAR(256) NOT NULL,
      markdown TEXT NOT NULL,
      html TEXT NOT NULL,
      category_id VARCHAR(64) REFERENCES pub_category(id),
      tags TEXT NOT NULL,
      allow_comments BOOLEAN NOT NULL,
      notifications BOOLEAN NOT NULL,
      published_at BIGINT,
      created_at BIGINT NOT NULL
    )`,
    `CREATE INDEX pub_post_id_index ON pub_post(id)`,
    `CREATE INDEX pub_post_external_account_id_index ON pub_post(external_account_id)`,
    `CREATE INDEX pub_post_published_at_index ON pub_post(published_at)`,
    `CREATE INDEX pub_post_category_index ON pub_post(category)`
  ];

  return category.concat(post);
}
