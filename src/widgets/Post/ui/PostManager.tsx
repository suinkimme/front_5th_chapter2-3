import { PostSearchForm, PostTagSelector, PostTable } from "@/features/post/ui"

const PostManager = () => {
  return (
    <div>
      <div className="flex gap-4">
        <PostSearchForm />
        <PostTagSelector />
      </div>
      <PostTable />
    </div>
  )
}

export default PostManager
