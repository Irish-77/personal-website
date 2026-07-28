import { posts } from "#site/content";
import { PostList } from "@/components/post-list";
import { sortPosts } from "@/lib/posts";

interface LatestPostsProps {
  count?: number;
}

export default function LatestPosts({ count = 2 }: LatestPostsProps) {
  const latest = sortPosts(posts.filter((p) => p.published)).slice(0, count);
  return <PostList posts={latest} />;
}
