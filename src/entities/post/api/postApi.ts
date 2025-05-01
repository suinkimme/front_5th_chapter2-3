import { request } from "@/shared/api/base"
import { ENDPOINTS } from "@/shared/api/endpoints"
import { ISelectedPost, INewPost, IPostsResponse } from "@/entities/post/model/types"

export const postApi = {
  getPosts: () => request<IPostsResponse>(ENDPOINTS.POSTS.GET),
  searchPosts: (query: string) => request<IPostsResponse>(ENDPOINTS.POSTS.SEARCH(query)),
  createPost: (post: INewPost) => request(ENDPOINTS.POSTS.CREATE, { method: "POST", body: JSON.stringify(post) }),
  updatePost: (post: ISelectedPost) =>
    request(ENDPOINTS.POSTS.UPDATE(post.id), { method: "PUT", body: JSON.stringify(post) }),
  deletePost: (id: number) => request(ENDPOINTS.POSTS.DELETE(id)),
  getTags: () => request(ENDPOINTS.POSTS.GET_TAGS),
  getPostsByTag: (tag: string) => request(ENDPOINTS.POSTS.GET_BY_TAG(tag)),
}
