import { IPostWithAuthor, IPostsResponse, SortBy, SortOrder } from "@/entities/post/model/types"
import { IUsersResponse } from "@/entities/user/model/types"

export const enrichPostsWithAuthors = (postsResponse?: IPostsResponse, usersResponse?: IUsersResponse) => {
  if (!postsResponse || !usersResponse) return []

  return postsResponse.posts.map((post) => {
    const author = usersResponse.users.find((user) => user.id === post.userId)
    return { ...post, author }
  })
}

export const sortPosts = (posts: IPostWithAuthor[], sortBy: SortBy, sortOrder: SortOrder) => {
  if (sortBy === "none") return posts

  const sorted = [...posts].sort((a, b) => {
    let aValue: string | number
    let bValue: string | number

    if (sortBy === "author") {
      aValue = a.author?.username ?? ""
      bValue = b.author?.username ?? ""
    } else {
      aValue = a[sortBy]
      bValue = b[sortBy]
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      if (sortOrder === "asc") return aValue.localeCompare(bValue)
      else return bValue.localeCompare(aValue)
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      if (sortOrder === "asc") return aValue - bValue
      else return bValue - aValue
    }

    return 0
  })

  return sorted
}
