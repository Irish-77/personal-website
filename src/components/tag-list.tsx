import { Tag } from "@/components/tag";

interface TagListProps {
  tags: Record<string, number>;
  currentTag?: string;
}

export function TagList({ tags, currentTag }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(tags).map(([tag, count]) => (
        <Tag tag={tag} key={tag} count={count} current={tag === currentTag} />
      ))}
    </div>
  );
}

export default TagList;
