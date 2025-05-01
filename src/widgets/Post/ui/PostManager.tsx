import {
  PostSearchForm,
  PostTagSelector,
  PostSortBySelector,
  PostSortOrderSelector,
  PostTable,
  PostListPagination,
  PostDetailModal,
} from "@/features/post/ui"
import { UserModal } from "@/features/user/ui"

const PostManager = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <PostSearchForm />
        <PostTagSelector />
        <PostSortBySelector />
        <PostSortOrderSelector />
      </div>
      <PostTable />
      <PostListPagination />
      <UserModal />
      <PostDetailModal />
    </div>
  )
}

export default PostManager
