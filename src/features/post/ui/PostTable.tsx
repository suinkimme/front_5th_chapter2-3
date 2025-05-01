import { usePost } from "@/features/post/model/usePost"
import { Table, Loading } from "@/shared/ui"
import { PostList, PostTableHeader } from "@/features/post/ui"

const PostTable = () => {
  const { posts, isLoading, searchQuery } = usePost()

  return (
    <Table>
      <PostTableHeader />
      {isLoading ? <Loading /> : <PostList posts={posts} searchQuery={searchQuery} />}
    </Table>
  )
}

export default PostTable
