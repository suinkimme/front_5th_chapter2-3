import { useCommentsByPostIdQuery } from "@/entities/comment/model/queries"
import { usePostStore } from "@/features/post/model/store"

export const useComment = () => {
  const selectedPost = usePostStore((state) => state.selectedPost)
  const postId = selectedPost?.id ?? 0
  const {
    data: commentsResponse,
    isLoading,
    error,
  } = useCommentsByPostIdQuery(postId, {
    enabled: !!postId,
    staleTime: 0,
  })

  return { comments: commentsResponse?.comments, isLoading, error, selectedPost }
}
