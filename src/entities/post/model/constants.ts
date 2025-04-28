export const POST_QUERIES = {
  all: ["posts"] as const,
  list: () => [...POST_QUERIES.all, "list"] as const,
  byId: (id: number) => [...POST_QUERIES.all, id] as const,
  byTag: (tag: string) => [...POST_QUERIES.all, "tag", tag] as const,
  tags: () => [...POST_QUERIES.all, "tags"] as const,
}
