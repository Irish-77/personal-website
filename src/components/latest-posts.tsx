"use client";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import React from "react";

export default function LatestPosts() {

    const latestPosts = sortPosts(posts).slice(0, 2);

    return (
        <>
            <ul className="flex flex-col">
                {latestPosts.map((post) => (
                    <li key={post.slug} className="first:border-t first:border-border">
                        <PostItem
                            slug={post.slug}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            tags={post.tags}
                            language={post.language}
                            image={""}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}
