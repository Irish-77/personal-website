import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const splitTitle = (title: string): [string, string] => {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return [title, ""];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
};

const computedPostFields = <T extends { slug: string; title: string; title_line_1?: string; title_line_2?: string }>(
  data: T
) => {
  const [auto1, auto2] = splitTitle(data.title);
  return {
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
    title_line_1: data.title_line_1 ?? auto1,
    title_line_2: data.title_line_2 ?? auto2,
  };
};

const computedProjectFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      title_line_1: s.string().max(99).optional(),
      title_line_2: s.string().max(99).optional(),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      language: s.string().default("English"),
      tags: s.array(s.string()).optional(),
      body: s.mdx(),
      image: s.string().optional().default("/assets/images/blog/wallpaper.jpg"),
    })
    .transform(computedPostFields),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.md",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      context: s.string(),
      image: s.string(),
      skills: s.array(s.string()),
      stack: s.array(s.string()),
      repoURL: s.string().url().optional(),
      repoText: s.string().default("GitHub"),
      projectURL: s.string().url().optional(),
      projectText: s.string().optional(),
      order: s.number().default(0),
      published: s.boolean().default(true),
      body: s.markdown(),
    })
    .transform(computedProjectFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, projects },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      rehypeKatex,
    ],
    remarkPlugins: [remarkMath],
  },
});
