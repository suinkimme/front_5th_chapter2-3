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
  selectedPost: IPostWithAuthor | null

  setPosts: (posts: IPostWithAuthor[]) => void
  setSearchQuery: (searchQuery: string) => void
  setSelectedTag: (selectedTag: string) => void
  setSortBy: (sortBy: SortBy) => void
  setSortOrder: (sortOrder: SortOrder) => void
  setLimit: (limit: number) => void
  setSkip: (skip: number) => void
  setTotal: (total: number) => void
  setSelectedPost: (selectedPost: IPostWithAuthor | null) => void
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
  selectedPost: null,

  setPosts: (posts: IPostWithAuthor[]) => set({ posts }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  setSelectedTag: (selectedTag: string) => set({ selectedTag }),
  setSortBy: (sortBy: SortBy) => set({ sortBy }),
  setSortOrder: (sortOrder: SortOrder) => set({ sortOrder }),
  setLimit: (limit: number) => set({ limit }),
  setSkip: (skip: number) => set({ skip }),
  setTotal: (total: number) => set({ total }),
  setSelectedPost: (selectedPost: IPostWithAuthor | null) => set({ selectedPost }),
}))

interface PostModalState {
  showPostModal: boolean

  setShowPostModal: (show: boolean) => void
}

export const usePostModalStore = create<PostModalState>((set) => ({
  showPostModal: false,

  setShowPostModal: (show: boolean) => set({ showPostModal: show }),
}))

interface PostCreateModalState {
  showPostCreateModal: boolean

  setShowPostCreateModal: (show: boolean) => void
}

export const usePostCreateModalStore = create<PostCreateModalState>((set) => ({
  showPostCreateModal: false,

  setShowPostCreateModal: (show: boolean) => set({ showPostCreateModal: show }),
}))
