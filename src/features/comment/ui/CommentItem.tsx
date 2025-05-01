import { usePostStore } from "@/features/post/model/store"
import { ThumbsUp, Edit2, Trash2 } from "lucide-react"
import { Button, HighlightText } from "@/shared/ui"
import { IComment } from "@/entities/comment/model/types"
import { useCommentStore } from "@/features/comment/model/store"
import { useDeleteCommentMutation, useLikeCommentMutation } from "@/entities/comment/model/queries"
interface ICommentItemProps {
  comment: IComment
  postId: number
}

const CommentItem = ({ comment, postId }: ICommentItemProps) => {
  const { searchQuery } = usePostStore()
  const { setSelectedComment, setShowEditCommentDialog } = useCommentStore()
  const likeComment = useLikeCommentMutation()
  const deleteComment = useDeleteCommentMutation()

  return (
    <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
      <div className="flex items-center space-x-2 overflow-hidden">
        <span className="font-medium truncate">{comment.user.username}:</span>
        <span className="truncate">
          <HighlightText text={comment.body} highlight={searchQuery} />
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="sm" onClick={() => likeComment.mutate(comment.id)}>
          <ThumbsUp className="w-3 h-3" />
          <span className="ml-1 text-xs">{comment.likes}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setSelectedComment(comment)
            setShowEditCommentDialog(true)
          }}
        >
          <Edit2 className="w-3 h-3" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => deleteComment.mutate(comment.id)}>
          <Trash2 className="w-3 h-3" />
        </Button>
      </div>
    </div>
  )
}

export default CommentItem
