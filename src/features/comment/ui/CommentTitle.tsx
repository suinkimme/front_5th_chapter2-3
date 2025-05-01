import { Plus } from "lucide-react"
import { Button } from "@/shared/ui"
import { useCommentCreateForm } from "@/features/comment/model/useCommentCreateForm"
import { usePostStore } from "@/features/post/model/store"

const CommentTitle = () => {
  const { setNewComment, setShowAddCommentDialog } = useCommentCreateForm()
  const { selectedPost } = usePostStore()

  return (
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold">댓글</h3>
      <Button
        size="sm"
        onClick={() => {
          setNewComment((prev) => ({ ...prev, postId: selectedPost?.id || 0 }))
          setShowAddCommentDialog(true)
        }}
      >
        <Plus className="w-3 h-3 mr-1" />
        댓글 추가
      </Button>
    </div>
  )
}

export default CommentTitle
