export interface IReactions {
  likes: number
  dislikes: number
}

export interface ITag {
  id: number
  name: string
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
  author?: {
    id: number
    image: string
    username: string
  }
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
