import { Plus } from "lucide-react"
import { CardHeader, CardTitle, Button } from "@/shared/ui"
import { usePostCreateModalStore } from "@/features/post/model/store"

const PostManagerTitle = () => {
  const setShowPostCreateModal = usePostCreateModalStore((state) => state.setShowPostCreateModal)

  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <Button onClick={() => setShowPostCreateModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          게시물 추가
        </Button>
      </CardTitle>
    </CardHeader>
  )
}

export default PostManagerTitle
