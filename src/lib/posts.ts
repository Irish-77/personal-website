import { Post } from "#site/content";
import { slug } from "github-slugger";

export function sortPosts(posts: Array<Post>) {
  return [...posts].sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function getAllTags(posts: Array<Post>): Record<string, number> {
  const tags: Record<string, number> = {};
  for (const post of posts) {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
    if (post.language) {
      tags[post.language] = (tags[post.language] ?? 0) + 1;
    }
  }
  return tags;
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter((post) => {
    const tagMatch = post.tags?.some((t) => slug(t) === tag) ?? false;
    const languageMatch = slug(post.language ?? "") === tag;
    return tagMatch || languageMatch;
  });
}
