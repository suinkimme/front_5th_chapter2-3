import {
  PostSearchForm,
  PostTagSelector,
  PostSortBySelector,
  PostSortOrderSelector,
  PostTable,
  PostListPagination,
} from "@/features/post/ui"

const PostManager = () => {
  return (
    <div>
      <div className="flex gap-4">
        <PostSearchForm />
        <PostTagSelector />
        <PostSortBySelector />
        <PostSortOrderSelector />
      </div>
      <PostTable />
      <PostListPagination />
    </div>
  )
}

export default PostManager
