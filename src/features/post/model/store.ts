import { create } from "zustand"
import { IPostWithAuthor, SortBy, SortOrder } from "@/entities/post/model/types"

interface PostListState {
  posts: IPostWithAuthor[]
  searchQuery: string
  selectedTag: string
  sortBy: SortBy
  sortOrder: SortOrder

  setPosts: (posts: IPostWithAuthor[]) => void
  setSearchQuery: (searchQuery: string) => void
  setSelectedTag: (selectedTag: string) => void
  setSortBy: (sortBy: SortBy) => void
  setSortOrder: (sortOrder: SortOrder) => void
}

export const usePostStore = create<PostListState>((set) => ({
  posts: [],
  searchQuery: "",
  selectedTag: "all",
  sortBy: "none",
  sortOrder: "asc",

  setPosts: (posts: IPostWithAuthor[]) => set({ posts }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  setSelectedTag: (selectedTag: string) => set({ selectedTag }),
  setSortBy: (sortBy: SortBy) => set({ sortBy }),
  setSortOrder: (sortOrder: SortOrder) => set({ sortOrder }),
}))
