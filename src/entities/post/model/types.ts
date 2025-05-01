import { IUser } from "@/entities/user/model/types"

export interface IReactions {
  likes: number
  dislikes: number
}

export interface ITag {
  slug: string
  name: string
  url: string
}

export interface IPost {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: IReactions
  views: number
  userId: number
}

export interface IPostWithAuthor extends IPost {
  author: IUser
}

export interface IPostsResponse {
  posts: IPost[]
  total: number
  skip: number
  limit: number
}

export interface INewPost {
  body: string
  title: string
  userId: number
}

export interface ISelectedPost extends INewPost {
  id: number
}

export type SortBy = "id" | "title" | "views" | "userId" | "author" | "none"
export type SortOrder = "asc" | "desc"
