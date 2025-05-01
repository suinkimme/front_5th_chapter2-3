import { usePost } from "@/features/post/model/usePost"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/shared/ui"

const PostTagSelector = () => {
  const { tags, selectedTag, setSelectedTag } = usePost()

  return (
    <Select
      value={selectedTag}
      onValueChange={(value) => {
        setSelectedTag(value)
        // updateURL()
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default PostTagSelector
