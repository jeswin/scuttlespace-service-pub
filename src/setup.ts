export default async function setup() {
  const category = [
    `CREATE TABLE pub_category ( 
      rowid BIGSERIAL PRIMARY KEY,
      id VARCHAR(64) NOT NULL, 
      username VARCHAR(64) NOT NULL,
      name VARCHAR(64) NOT NULL,
      created_at BIGINT NOT NULL
    )`,
    `CREATE INDEX pub_category_id_index ON pub_post(id)`,
    `CREATE INDEX pub_category_username_index ON pub_post(username)`
  ];

  const post = [
    `CREATE TABLE pub_post (
      rowid BIGSERIAL PRIMARY KEY,
      id VARCHAR(64) NOT NULL,
      username VARCHAR(64) NOT NULL,
      title VARCHAR(256) NOT NULL,
      slug VARCHAR(256) NOT NULL,
      markdown TEXT NOT NULL,
      html TEXT NOT NULL,
      category_id VARCHAR(64) NOT NULL REFERENCES pub_category(id),
      tags TEXT NOT NULL,
      allow_comments BOOLEAN NOT NULL,
      notifications BOOLEAN NOT NULL,
      published_at BIGINT,
      created_at BIGINT NOT NULL
    )`,
    `CREATE INDEX pub_post_id_index ON pub_post(id)`,
    `CREATE INDEX pub_post_username_index ON pub_post(username)`,
    `CREATE INDEX pub_post_published_at_index ON pub_post(published_at)`,
    `CREATE INDEX pub_post_category_index ON pub_post(category)`
  ];

  return category.concat(post);
}
