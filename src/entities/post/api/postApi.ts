import { request } from "@/shared/api/base"
import { ENDPOINTS } from "@/shared/api/endpoints"
import { IPost } from "@/entities/post/model/types"

export const postApi = {
  getPosts: () => request(ENDPOINTS.POSTS.GET),
  createPost: (post: IPost) => request(ENDPOINTS.POSTS.CREATE, { method: "POST", body: JSON.stringify(post) }),
  updatePost: (id: number, post: IPost) =>
    request(ENDPOINTS.POSTS.UPDATE(id), { method: "PUT", body: JSON.stringify(post) }),
  deletePost: (id: number) => request(ENDPOINTS.POSTS.DELETE(id)),
  getTags: () => request(ENDPOINTS.POSTS.GET_TAGS),
  getPostsByTag: (tag: string) => request(ENDPOINTS.POSTS.GET_BY_TAG(tag)),
}
