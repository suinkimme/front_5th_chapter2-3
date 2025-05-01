import { create } from "zustand"
import { IPostWithAuthor } from "@/entities/post/model/types"

interface PostListState {
  posts: IPostWithAuthor[]
  searchQuery: string
  selectedTag: string

  setPosts: (posts: IPostWithAuthor[]) => void
  setSearchQuery: (searchQuery: string) => void
  setSelectedTag: (selectedTag: string) => void
}

export const usePostStore = create<PostListState>((set) => ({
  posts: [],
  searchQuery: "",
  selectedTag: "all",

  setPosts: (posts: IPostWithAuthor[]) => set({ posts }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  setSelectedTag: (selectedTag: string) => set({ selectedTag }),
}))
