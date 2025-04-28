import { request } from "@/shared/api/base"
import { ENDPOINTS } from "@/shared/api/endpoints"
import { IComment, INewComment } from "@/entities/comment/model/types"

export const commentApi = {
  getCommentsByPostId: (postId: number) => request(ENDPOINTS.COMMENTS.GET_BY_POST(postId)),
  createComment: (comment: INewComment) =>
    request(ENDPOINTS.COMMENTS.CREATE, { method: "POST", body: JSON.stringify(comment) }),
  updateComment: (comment: IComment) =>
    request(ENDPOINTS.COMMENTS.UPDATE(comment.id), { method: "PUT", body: JSON.stringify(comment) }),
  deleteComment: (commentId: number) => request(ENDPOINTS.COMMENTS.DELETE(commentId)),
  likeComment: (commentId: number) => request(ENDPOINTS.COMMENTS.LIKE(commentId)),
}
