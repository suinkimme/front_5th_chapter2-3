import { create } from "zustand"

interface CommentStore {
  showAddCommentDialog: boolean
  setShowAddCommentDialog: (showAddCommentDialog: boolean) => void
}

export const useCommentStore = create<CommentStore>((set) => ({
  showAddCommentDialog: false,

  setShowAddCommentDialog: (showAddCommentDialog: boolean) => set({ showAddCommentDialog }),
}))
