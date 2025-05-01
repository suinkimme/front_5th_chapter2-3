import { PostItem } from "@/features/post/ui"
import { TableBody } from "@/shared/ui"
import { IPostWithAuthor } from "@/entities/post/model/types"

interface IPostListProps {
  posts: IPostWithAuthor[]
  searchQuery: string
}

const PostList = ({ posts, searchQuery }: IPostListProps) => {
  return (
    <TableBody>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} searchQuery={searchQuery} />
      ))}
    </TableBody>
  )
}

export default PostList
