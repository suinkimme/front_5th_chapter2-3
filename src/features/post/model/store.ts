import { create } from "zustand"
import { IPostWithAuthor } from "@/entities/post/model/types"

interface PostListState {
  posts: IPostWithAuthor[]
  searchQuery: string

  setPosts: (posts: IPostWithAuthor[]) => void
  setSearchQuery: (searchQuery: string) => void
}

export const usePostStore = create<PostListState>((set) => ({
  posts: [],
  searchQuery: "",

  setPosts: (posts: IPostWithAuthor[]) => set({ posts }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
}))
