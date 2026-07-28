import { Metadata } from "next";
import { slug } from "github-slugger";
import { posts } from "#site/content";
import { PostList } from "@/components/post-list";
import { TagList } from "@/components/tag-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, getPostsByTagSlug, sortPosts, sortTagsByCount } from "@/lib/posts";

interface TagPageProps {
  params: { tag: string };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
  };
}

export function generateStaticParams() {
  const tags = getAllTags(posts);
  return Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const displayPosts = sortPosts(getPostsByTagSlug(posts, tag));
  const tags = getAllTags(posts);
  const sortedTagMap = Object.fromEntries(
    sortTagsByCount(tags).map((t) => [t, tags[t]])
  );
  const currentTag = Object.keys(sortedTagMap).find((t) => slug(t) === tag);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-black capitalize lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-3">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          <PostList posts={displayPosts} />
        </div>

        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <TagList tags={sortedTagMap} currentTag={currentTag} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
