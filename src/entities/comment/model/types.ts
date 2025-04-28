export interface IComment {
  id: number
  body: string
  postId: number
  likes: number
  user: {
    fullName: string
    id: number
    username: string
  }
}

export interface INewComment {
  body: string
  postId: number
  userId: number
}

export interface ICommentResponse {
  comments: IComment[]
  total: number
  skip: number
  limit: number
}
