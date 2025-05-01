import { Card, CardContent } from "../shared/ui"
import { PostManager } from "@/widgets/Post/ui"
import { PostManagerTitle } from "@/features/post/ui"

const PostsManager = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <PostManagerTitle />
      <CardContent>
        <PostManager />
      </CardContent>
    </Card>
  )
}

export default PostsManager
