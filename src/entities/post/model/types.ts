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
  tags: ITag[]
  reactions: IReactions
  views: number
  userId: number
}
