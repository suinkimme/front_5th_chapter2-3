import { usePostModal } from "@/features/post/model/usePostModal"
import { usePostStore } from "@/features/post/model/store"
import { Comment } from "@/features/comment/ui"
import { Dialog, DialogContent, DialogHeader, DialogTitle, HighlightText } from "@/shared/ui"

const PostDetailModal = () => {
  const { showPostModal, setShowPostModal } = usePostModal()
  const { selectedPost, searchQuery } = usePostStore()

  return (
    selectedPost && (
      <Dialog open={showPostModal} onOpenChange={setShowPostModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              <HighlightText text={selectedPost.title} highlight={searchQuery} />
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>
              <HighlightText text={selectedPost.body} highlight={searchQuery} />
            </p>
            <Comment />
          </div>
        </DialogContent>
      </Dialog>
    )
  )
}

export default PostDetailModal
