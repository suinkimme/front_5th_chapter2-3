import { usePost } from "@/features/post/model/usePost"
import { Table, Loading } from "@/shared/ui"
import { PostList, PostTableHeader } from "@/widgets/Post/ui"

const PostTable = () => {
  const { posts, isLoading, searchQuery } = usePost()

  if (isLoading) {
    return <Loading />
  }

  return (
    <Table>
      <PostTableHeader />
      <PostList posts={posts} searchQuery={searchQuery} />
    </Table>
  )
}

export default PostTable
