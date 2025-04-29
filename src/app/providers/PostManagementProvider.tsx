import { Provider, createStore } from "jotai"
// import { IPostWithAuthor, ITag } from "@/entities/post/model/types"
// import { IComment, INewComment } from "@/entities/comment/model/types"
// import { IUser } from "@/entities/user/model/types"
// import { useSearch } from "@/features/post/model/useSearch"

interface PostManagementContextType {
  // Post List 관련
  // posts: IPostWithAuthor[]
  // total: number
  // skip: number
  // limit: number
  // // Post Edit 관련
  // selectedPost: IPostWithAuthor | null
  // // Post Create 관련
  // newPost: IPostWithAuthor
  // // Tag 관련
  // tags: ITag[]
  // selectedTag: string
  // // Comment List 관련
  // comments: {
  //   [key: number]: IComment[]
  // }
  // // Comment Edit 관련
  // selectedComment: IComment | null
  // // Comment Create 관련
  // newComment: INewComment
  // // User 관련
  // selectedUser: IUser | null
  // // Dialog 관련
  // showAddDialog: boolean
  // showEditDialog: boolean
  // showPostDetailDialog: boolean
  // showAddCommentDialog: boolean
  // showEditCommentDialog: boolean
  // showUserModal: boolean
  // Search 관련
  searchQuery: string
  handlePostSearch: (query: string) => void
}

export const PostManagementProvider = ({ children }: { children: ReactNode }) => {
  const store = createStore()
  return <Provider store={store}>{children}</Provider>
}
