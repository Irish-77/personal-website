import { Metadata } from "next";
import { posts } from "#site/content";
import { TagList } from "@/components/tag-list";
import { getAllTags, sortTagsByCount } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topics I've written about",
};

export default function TagsPage() {
  const tags = getAllTags(posts);
  const sorted = Object.fromEntries(
    sortTagsByCount(tags).map((t) => [t, tags[t]])
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-black lg:text-5xl">Tags</h1>
        </div>
      </div>
      <hr className="my-4" />
      <TagList tags={sorted} />
    </div>
  );
}
