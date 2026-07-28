import { Metadata } from "next";
import { projects } from "#site/content";
import { ProjectList } from "@/components/project-list";
import { sortProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects I have developed over the years, ranging from web applications to machine learning systems.",
};

export default function ProjectsPage() {
  const visibleProjects = sortProjects(projects.filter((p) => p.published));

  return (
    <>
      <h1 className="py-10 text-center text-4xl font-black lg:text-5xl">
        My Projects
      </h1>
      <ProjectList projects={visibleProjects} />
    </>
  );
}
