import { useUser } from "@/features/user/model/useUser"
import { PostItem } from "@/features/post/ui"
import { TableBody } from "@/shared/ui"
import { IPostWithAuthor } from "@/entities/post/model/types"

interface IPostListProps {
  posts: IPostWithAuthor[]
  searchQuery: string
}

const PostList = ({ posts, searchQuery }: IPostListProps) => {
  const { showUserModal, setShowUserModal, setSelectedUser } = useUser()

  return (
    <TableBody>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          searchQuery={searchQuery}
          handleUserClick={() => {
            setSelectedUser(post.author)
            setShowUserModal(!showUserModal)
          }}
        />
      ))}
    </TableBody>
  )
}

export default PostList
