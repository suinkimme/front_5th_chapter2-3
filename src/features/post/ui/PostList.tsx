import { useUser } from "@/features/user/model/useUser"
import { usePost } from "@/features/post/model/usePost"
import { usePostModal } from "@/features/post/model/usePostModal"
import { PostItem } from "@/features/post/ui"
import { TableBody } from "@/shared/ui"
import { IPostWithAuthor } from "@/entities/post/model/types"

interface IPostListProps {
  posts: IPostWithAuthor[]
}

const PostList = ({ posts }: IPostListProps) => {
  const { showUserModal, setShowUserModal, setSelectedUser } = useUser()
  const { searchQuery, setSelectedPost } = usePost()
  const { showPostModal, setShowPostModal } = usePostModal()

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
          handlePostDetailClick={() => {
            setSelectedPost(post)
            setShowPostModal(!showPostModal)
          }}
        />
      ))}
    </TableBody>
  )
}

export default PostList
