import { usePostEditModalStore } from "@/features/post/model/store"
import { useUpdatePostMutation } from "@/entities/post/model/queries"

export const useEditPostForm = () => {
  const showPostEditModal = usePostEditModalStore((state) => state.showPostEditModal)
  const setShowPostEditModal = usePostEditModalStore((state) => state.setShowPostEditModal)
  const selectedPost = usePostEditModalStore((state) => state.selectedPost)
  const setSelectedPost = usePostEditModalStore((state) => state.setSelectedPost)

  const updatePost = useUpdatePostMutation()

  return { showPostEditModal, setShowPostEditModal, selectedPost, setSelectedPost, updatePost }
}
