
import { ExpandableCards } from '@/components/project-parser';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Projects",
  description: "Projects that I have developed over the years, ranging from web applications to machine learning systems.",
};


const ProjectPage = () => {

  return (
    <>
      <h1 className="text-center font-black text-4xl lg:text-5xl py-10">My Projects</h1>
      <ExpandableCards />
    </>
  );
};

export default ProjectPage;