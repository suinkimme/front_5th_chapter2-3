export const ENDPOINTS = {
  POSTS: {
    GET: "/posts",
    CREATE: "/posts/add",
    UPDATE: (postId: string) => `/posts/${postId}`,
    DELETE: (postId: string) => `/posts/${postId}`,
    GET_TAGS: "/posts/tags",
    GET_BY_TAG: (tag: string) => `/posts/tag/${tag}`,
  },
  COMMENTS: {
    GET_BY_POST: (postId: string) => `/comments/post/${postId}`,
    CREATE: "/comments/add",
    UPDATE: (commentId: string) => `/comments/${commentId}`,
    DELETE: (commentId: string) => `/comments/${commentId}`,
    LIKE: (commentId: string) => `/comments/${commentId}`,
  },
  USERS: {
    GET: "/users",
    GET_BY_ID: (userId: string) => `/users/${userId}`,
  },
}
