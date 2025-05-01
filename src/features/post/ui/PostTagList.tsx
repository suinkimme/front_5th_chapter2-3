interface IPostTagListProps {
  tags: string[]
}

const PostTagList = ({ tags }: IPostTagListProps) => (
  <div className="flex flex-wrap gap-1">
    {tags.map((tag) => (
      <span key={tag} className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer`} onClick={() => {}}>
        {tag}
      </span>
    ))}
  </div>
)

export default PostTagList
