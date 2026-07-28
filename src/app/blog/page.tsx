import { Metadata } from "next";
import { posts } from "#site/content";
import { PostList } from "@/components/post-list";
import { TagList } from "@/components/tag-list";
import { QueryPagination } from "@/components/query-pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/posts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Basti's Blog",
  description: "My thoughts on various topics",
};

const POSTS_PER_PAGE = 100;

interface BlogPageProps {
  searchParams: { page?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const tags = getAllTags(posts);
  const sortedTagMap = Object.fromEntries(
    sortTagsByCount(tags).map((t) => [t, tags[t]])
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-black lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">{metadata.description}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-3">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          <PostList
            posts={sortedPosts}
            currentPage={currentPage}
            postsPerPage={POSTS_PER_PAGE}
          />
          <QueryPagination
            totalPages={totalPages}
            className="mt-4 justify-end"
          />
        </div>

        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <TagList tags={sortedTagMap} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
