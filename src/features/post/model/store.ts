import { create } from "zustand"
import { IPostWithAuthor, SortBy, SortOrder } from "@/entities/post/model/types"

interface PostListState {
  posts: IPostWithAuthor[]
  searchQuery: string
  selectedTag: string
  sortBy: SortBy
  sortOrder: SortOrder
  limit: number
  skip: number
  total: number

  setPosts: (posts: IPostWithAuthor[]) => void
  setSearchQuery: (searchQuery: string) => void
  setSelectedTag: (selectedTag: string) => void
  setSortBy: (sortBy: SortBy) => void
  setSortOrder: (sortOrder: SortOrder) => void
  setLimit: (limit: number) => void
  setSkip: (skip: number) => void
  setTotal: (total: number) => void
}

export const usePostStore = create<PostListState>((set) => ({
  posts: [],
  searchQuery: "",
  selectedTag: "all",
  sortBy: "none",
  sortOrder: "asc",
  limit: 10,
  skip: 0,
  total: 0,

  setPosts: (posts: IPostWithAuthor[]) => set({ posts }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  setSelectedTag: (selectedTag: string) => set({ selectedTag }),
  setSortBy: (sortBy: SortBy) => set({ sortBy }),
  setSortOrder: (sortOrder: SortOrder) => set({ sortOrder }),
  setLimit: (limit: number) => set({ limit }),
  setSkip: (skip: number) => set({ skip }),
  setTotal: (total: number) => set({ total }),
}))
