import { IPostsResponse } from "@/entities/post/model/types"
import { IUsersResponse } from "@/entities/user/model/types"

export const enrichPostsWithAuthors = (postsResponse?: IPostsResponse, usersResponse?: IUsersResponse) => {
  if (!postsResponse || !usersResponse) return []

  return postsResponse.posts.map((post) => {
    const author = usersResponse.users.find((user) => user.id === post.userId)
    return { ...post, author }
  })
}
