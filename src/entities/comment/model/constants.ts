export const COMMENT_QUERIES = {
  all: ["comments"] as const,
  byPostId: (postId: number) => [...COMMENT_QUERIES.all, "post", postId] as const,
}
