import { usePostModalStore } from "@/features/post/model/store"

export const usePostModal = () => {
  const showPostModal = usePostModalStore((state) => state.showPostModal)
  const setShowPostModal = usePostModalStore((state) => state.setShowPostModal)

  return { showPostModal, setShowPostModal }
}
