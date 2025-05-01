import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { IComment, INewComment, ICommentResponse } from "@/entities/comment/model/types"
import { commentApi } from "@/entities/comment/api/commentApi"
import { COMMENT_QUERIES } from "@/entities/comment/model/constants"

export const useCommentsByPostIdQuery = (postId: number, options = {}) => {
  return useQuery<ICommentResponse>({
    queryKey: COMMENT_QUERIES.byPostId(postId),
    queryFn: () => commentApi.getCommentsByPostId(postId),
    ...options,
  })
}

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (comment: INewComment) => commentApi.createComment(comment),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: COMMENT_QUERIES.byPostId(variables.postId) })
    },
  })
}

export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (comment: IComment) => commentApi.updateComment(comment),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: COMMENT_QUERIES.byPostId(variables.postId) })
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
