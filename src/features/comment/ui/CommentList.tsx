import { useComment } from "@/features/comment/model/useComment"
import { CommentItem } from "@/features/comment/ui"

const CommentList = () => {
  const { comments, isLoading, selectedPost } = useComment()

  return (
    !isLoading &&
    selectedPost && (
      <div className="space-y-1">
        {comments?.map((comment) => <CommentItem key={comment.id} comment={comment} postId={selectedPost.id} />)}
      </div>
    )
  )
}

export default CommentList
