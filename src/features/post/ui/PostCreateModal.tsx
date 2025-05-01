import { Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea, Button } from "@/shared/ui"
import { useCreatePostForm } from "@/features/post/model/useCreatePostForm"

const PostCreateModal = () => {
  const { showPostCreateModal, setShowPostCreateModal, newPost, setNewPost, addPost } = useCreatePostForm()
  return (
    <Dialog open={showPostCreateModal} onOpenChange={setShowPostCreateModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
          />
          <Button
            onClick={() => {
              addPost.mutate(newPost)
              setShowPostCreateModal(false)
              setNewPost({
                title: "",
                body: "",
                userId: 1,
              })
            }}
          >
            게시물 추가
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostCreateModal
