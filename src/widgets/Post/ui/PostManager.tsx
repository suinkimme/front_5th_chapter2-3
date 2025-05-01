import { PostSearchForm, PostTagSelector, PostSortBySelector, PostTable } from "@/features/post/ui"

const PostManager = () => {
  return (
    <div>
      <div className="flex gap-4">
        <PostSearchForm />
        <PostTagSelector />
        <PostSortBySelector />
      </div>
      <PostTable />
    </div>
  )
}

export default PostManager
