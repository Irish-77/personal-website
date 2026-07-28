import { Project } from "#site/content";

export function sortProjects(projects: Array<Project>) {
  return [...projects].sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
  });
}
