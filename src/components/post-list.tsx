"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PostItem } from "@/components/post-item";
import { Post } from "#site/content";

interface PostListProps {
  posts: Post[];
  currentPage?: number;
  postsPerPage?: number;
}

export function PostList({
  posts,
  currentPage = 1,
  postsPerPage = posts.length,
}: PostListProps) {
  const reduced = useReducedMotion();
  const start = postsPerPage * (currentPage - 1);
  const displayPosts = posts.slice(start, start + postsPerPage);

  if (displayPosts.length === 0) {
    return <p className="text-muted-foreground">Nothing to see here yet.</p>;
  }

  return (
    <ul className="flex flex-col">
      {displayPosts.map((post, i) => (
        <motion.li
          key={post.slug}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <PostItem
            slug={post.slug}
            date={post.date}
            title={post.title}
            description={post.description}
            tags={post.tags}
            language={post.language}
            image={post.image}
          />
        </motion.li>
      ))}
    </ul>
  );
}

export default PostList;
