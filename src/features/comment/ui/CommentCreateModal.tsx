import { Dialog, DialogContent, DialogHeader, DialogTitle, Textarea, Button } from "@/shared/ui"
import { useCommentCreateForm } from "@/features/comment/model/useCommentCreateForm"

const CommentCreateModal = () => {
  const { newComment, setNewComment, addComment, showAddCommentDialog, setShowAddCommentDialog } =
    useCommentCreateForm()

  return (
    <Dialog open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment((prev) => ({ ...prev, body: e.target.value }))}
          />
          <Button
            onClick={() => {
              addComment.mutate(newComment)
              setShowAddCommentDialog(false)
              setNewComment((prev) => ({ ...prev, body: "" }))
            }}
          >
            댓글 추가
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CommentCreateModal
