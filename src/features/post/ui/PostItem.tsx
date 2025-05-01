import { ThumbsUp, ThumbsDown, MessageSquare, Edit2, Trash2 } from "lucide-react"
import { PostTagList } from "@/features/post/ui"
import { TableRow, TableCell, HighlightText, Button } from "@/shared/ui"
import { IPostWithAuthor } from "@/entities/post/model/types"

interface IPostItemProps {
  post: IPostWithAuthor
  searchQuery: string
  handleUserClick: () => void
  handlePostDetailClick: () => void
  handlePostEditClick: () => void
  handlePostDeleteClick: () => void
}

const PostItem = ({
  post,
  searchQuery,
  handleUserClick,
  handlePostDetailClick,
  handlePostEditClick,
  handlePostDeleteClick,
}: IPostItemProps) => {
  return (
    <TableRow>
      <TableCell>{post.id}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div>
            <HighlightText text={post.title} highlight={searchQuery} />
          </div>
          <PostTagList tags={post.tags} />
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={handleUserClick}>
          <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
          <span>{post.author?.username}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-4 h-4" />
          <span>{post.reactions?.likes || 0}</span>
          <ThumbsDown className="w-4 h-4" />
          <span>{post.reactions?.dislikes || 0}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handlePostDetailClick}>
            <MessageSquare className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handlePostEditClick}>
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handlePostDeleteClick}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default PostItem
