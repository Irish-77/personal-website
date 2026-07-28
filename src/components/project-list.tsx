"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Badge } from "@/components/ui/badge";
import type { Project } from "#site/content";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/40"
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 z-[100] grid place-items-center p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute right-4 top-4 z-[110] flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground shadow lg:hidden"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full max-h-[90vh] w-full max-w-[500px] flex-col overflow-hidden bg-card text-card-foreground sm:rounded-3xl md:h-fit"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.image}
                  alt={active.title}
                  quality={100}
                  className="h-80 w-full object-cover object-top sm:rounded-tl-3xl sm:rounded-tr-3xl"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between gap-3 p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-base font-semibold"
                    >
                      {active.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground">
                      {active.skills.join(", ")}
                    </p>
                  </div>
                  {active.repoURL ? (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.repoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
                    >
                      {active.repoText}
                    </motion.a>
                  ) : null}
                </div>

                <div className="flex flex-wrap gap-2 px-4">
                  {active.stack.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="relative px-4 pb-20 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="prose prose-sm dark:prose-invert max-h-[40vh] max-w-none overflow-y-auto pb-10"
                    dangerouslySetInnerHTML={{ __html: active.body }}
                  />
                  {active.projectURL ? (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.projectURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow hover:bg-secondary/80"
                    >
                      {active.projectText ?? "Project Page"}
                    </motion.a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="mx-auto grid w-full max-w-4xl grid-cols-1 items-start gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <motion.li
            layoutId={`card-${project.title}-${id}`}
            key={project.slug}
            onClick={() => setActive(project)}
            className="flex cursor-pointer flex-col gap-4 rounded-xl p-4 hover:bg-accent"
          >
            <motion.div layoutId={`image-${project.title}-${id}`}>
              <Image
                width={500}
                height={500}
                quality={100}
                src={project.image}
                alt={project.title}
                className="h-60 w-full rounded-lg object-cover object-top"
              />
            </motion.div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <motion.h3
                layoutId={`title-${project.title}-${id}`}
                className="text-base font-semibold text-foreground"
              >
                {project.title}
              </motion.h3>
              <p className="text-sm text-muted-foreground">
                {project.skills.join(", ")}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
