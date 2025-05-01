import { useState, useEffect } from "react"
import { useCreateCommentMutation } from "@/entities/comment/model/queries"
import { useCommentStore } from "@/features/comment/model/store"
import { usePostStore } from "@/features/post/model/store"

export const useCommentCreateForm = () => {
  const selectedPost = usePostStore((state) => state.selectedPost)
  const [newComment, setNewComment] = useState({
    body: "",
    postId: selectedPost?.id || 0,
    userId: 1,
  })

  const showAddCommentDialog = useCommentStore((state) => state.showAddCommentDialog)
  const setShowAddCommentDialog = useCommentStore((state) => state.setShowAddCommentDialog)

  const addComment = useCreateCommentMutation()

  useEffect(() => {
    setNewComment((prev) => ({
      ...prev,
      postId: selectedPost?.id || 0,
    }))
  }, [selectedPost])

  return { newComment, setNewComment, addComment, showAddCommentDialog, setShowAddCommentDialog }
}
