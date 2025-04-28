export const ENDPOINTS = {
  POSTS: {
    GET: "/posts",
    CREATE: "/posts/add",
    UPDATE: (postId: number) => `/posts/${postId}`,
    DELETE: (postId: number) => `/posts/${postId}`,
    GET_TAGS: "/posts/tags",
    GET_BY_TAG: (tag: string) => `/posts/tag/${tag}`,
    SEARCH: (query: string) => `/posts/search?q=${query}`,
  },
  COMMENTS: {
    GET_BY_POST: (postId: number) => `/comments/post/${postId}`,
    CREATE: "/comments/add",
    UPDATE: (commentId: number) => `/comments/${commentId}`,
    DELETE: (commentId: number) => `/comments/${commentId}`,
    LIKE: (commentId: number) => `/comments/${commentId}`,
  },
  USERS: {
    GET: "/users?limit=0&select=username,image",
    GET_BY_ID: (userId: number) => `/users/${userId}`,
  },
}
