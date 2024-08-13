import React from 'react';
import CVParser from '@/components/cv-parser';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "CV",
  description: "Bastian's Curriculum Vitae",
};

function CVPage() {

  return  <>
  <h1 className="text-center font-black text-4xl lg:text-5xl py-10">Curriculum Vitae</h1>
  <CVParser />
  </>
  
}

export default CVPage;