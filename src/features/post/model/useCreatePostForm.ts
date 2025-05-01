import { useState } from "react"
import { usePostCreateModalStore } from "@/features/post/model/store"
import { useCreatePostMutation } from "@/entities/post/model/queries"

export const useCreatePostForm = () => {
  const showPostCreateModal = usePostCreateModalStore((state) => state.showPostCreateModal)
  const setShowPostCreateModal = usePostCreateModalStore((state) => state.setShowPostCreateModal)

  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    userId: 1,
  })

  const addPost = useCreatePostMutation()

  return { showPostCreateModal, setShowPostCreateModal, newPost, setNewPost, addPost }
}
