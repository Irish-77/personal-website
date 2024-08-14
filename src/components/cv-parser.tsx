"use client";

import { useState, useEffect } from 'react';
import CV from '@/components/cv';
import '@/styles/cv.css';
import 'react-vertical-timeline-component/style.min.css';

function CVParser() {
  const [CVList, setCVList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
      const url = `${basePath}/static/data/CVList.json`;
      const res = await fetch(url);
      const data = await res.json();
      setCVList(data);
    };

    fetchData();
  }, []);

  return <CV CVList={CVList} />;

}

export default CVParser;