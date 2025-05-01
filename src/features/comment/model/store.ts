import { create } from "zustand"
import { IComment } from "@/entities/comment/model/types"
interface CommentStore {
  selectedComment: IComment | null
  showAddCommentDialog: boolean
  showEditCommentDialog: boolean

  setShowAddCommentDialog: (showAddCommentDialog: boolean) => void
  setShowEditCommentDialog: (showEditCommentDialog: boolean) => void
  setSelectedComment: (selectedComment: IComment | null) => void
}

export const useCommentStore = create<CommentStore>((set) => ({
  showAddCommentDialog: false,
  showEditCommentDialog: false,
  selectedComment: null,

  setShowAddCommentDialog: (showAddCommentDialog: boolean) => set({ showAddCommentDialog }),
  setShowEditCommentDialog: (showEditCommentDialog: boolean) => set({ showEditCommentDialog }),
  setSelectedComment: (selectedComment: IComment | null) => set({ selectedComment }),
}))
