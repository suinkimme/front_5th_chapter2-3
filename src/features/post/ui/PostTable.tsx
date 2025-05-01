import { usePost } from "@/features/post/model/usePost"
import { Table, Loading } from "@/shared/ui"
import { PostList, PostTableHeader } from "@/features/post/ui"

const PostTable = () => {
  const { posts, isLoading } = usePost()

  if (isLoading) {
    return <Loading />
  }

  return (
    <Table>
      <PostTableHeader />
      <PostList posts={posts} />
    </Table>
  )
}

export default PostTable
