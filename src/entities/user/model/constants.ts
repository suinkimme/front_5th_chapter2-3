export const USER_QUERIES = {
  all: ["users"] as const,
  list: () => [...USER_QUERIES.all, "list"] as const,
  byId: (id: number) => [...USER_QUERIES.all, id] as const,
}
