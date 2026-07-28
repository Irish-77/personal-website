import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { US, DE, GB } from "country-flag-icons/react/3x2";
import { Tag } from "./tag";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  language?: string;
  image?: string;
}

const LANGUAGE_ICONS: Record<string, JSX.Element> = {
  english: <US title="English" className="h-3 w-4" />,
  german: <DE title="German" className="h-3 w-4" />,
};

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  language = "English",
  image,
}: PostItemProps) {
  const icon = LANGUAGE_ICONS[language.toLowerCase()] ?? (
    <GB title="English" className="h-3 w-4" />
  );

  return (
    <article className="flex flex-col gap-4 border-b border-border py-6">
      <h2 className="text-2xl font-bold">
        <Link href={"/" + slug}>{title}</Link>
      </h2>

      {image ? (
        <div className="mb-2 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={400}
            className="h-48 w-full object-cover"
          />
        </div>
      ) : null}

      {tags && tags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      ) : null}

      {description ? (
        <p className="text-muted-foreground">{description}</p>
      ) : null}

      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <div className="flex items-center gap-1 text-sm">
          {icon}
          <span>{language}</span>
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
