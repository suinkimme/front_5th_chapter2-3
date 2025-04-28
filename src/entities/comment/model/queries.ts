import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { IComment, INewComment } from "@/entities/comment/model/types"
import { commentApi } from "@/entities/comment/api/commentApi"
import { COMMENT_QUERIES } from "@/entities/comment/model/constants"

export const useCommentsByPostIdQuery = (postId: number) => {
  return useQuery({
    queryKey: COMMENT_QUERIES.byPostId(postId),
    queryFn: () => commentApi.getCommentsByPostId(postId),
  })
}

export const useCreateCommentMutation = (comment: INewComment) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => commentApi.createComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMENT_QUERIES.byPostId(comment.postId) })
    },
  })
}

export const useUpdateCommentMutation = (comment: IComment) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => commentApi.updateComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMENT_QUERIES.byPostId(comment.postId) })
    },
  })
}

export const useDeleteCommentMutation = (commentId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => commentApi.deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMENT_QUERIES.byPostId(commentId) })
    },
  })
}

export const useLikeCommentMutation = (commentId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => commentApi.likeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COMMENT_QUERIES.byPostId(commentId) })
    },
  })
}
