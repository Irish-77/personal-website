import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./tag";
import {US, DE, GB} from "country-flag-icons/react/3x2";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  language: string;
  image?: string; // path to image
}


export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  language = "English",
  image,
}: PostItemProps) {
  const getLanguageIcon = (language: string) => {
    switch (language.toLowerCase()) {
      case "english":
        return <US title="English" className="w-4 h-3" />;
      case "german":
        return <DE title="German" className="w-4 h-3" />;
      default:
        return <GB title="English" className="w-4 h-3" />;
    }
  };
  return (
  <article className="flex flex-col gap-4 border-border border-b py-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            <Link href={"/" + slug}>{title}</Link>
          </h2>
        </div>
      </div>
      {image && (
        <div className="mb-4">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
        </div>
      )}
      <div className="flex gap-2 mb-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="text-muted-foreground mb-4">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <div className="flex items-center">
          {getLanguageIcon(language)}
          <span className="ml-1 text-sm">{language}</span>
        </div>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}