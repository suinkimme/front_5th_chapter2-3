import { useCommentStore } from "@/features/comment/model/store"
import { useUpdateCommentMutation } from "@/entities/comment/model/queries"

export const useCommentEditForm = () => {
  const selectedComment = useCommentStore((state) => state.selectedComment)
  const showEditCommentDialog = useCommentStore((state) => state.showEditCommentDialog)
  const setSelectedComment = useCommentStore((state) => state.setSelectedComment)
  const setShowEditCommentDialog = useCommentStore((state) => state.setShowEditCommentDialog)

  const updateComment = useUpdateCommentMutation()

  return { showEditCommentDialog, setShowEditCommentDialog, selectedComment, setSelectedComment, updateComment }
}
