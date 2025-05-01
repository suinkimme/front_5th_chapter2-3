import { useCommentsByPostIdQuery } from "@/entities/comment/model/queries"
import { useCommentStore } from "@/features/comment/model/store"
import { usePostStore } from "@/features/post/model/store"

export const useComment = () => {
  const selectedComment = useCommentStore((state) => state.selectedComment)
  const setSelectedComment = useCommentStore((state) => state.setSelectedComment)

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

  return { comments: commentsResponse?.comments, isLoading, error, selectedPost, selectedComment, setSelectedComment }
}
