"use client";

import { useEffect, useState } from "react";
import { IpynbRenderer, type IpynbType } from "react-ipynb-renderer-katex";
import LatentScatter from "@/components/latent-scatter";
import "katex/dist/katex.min.css";
import "@/styles/notebook.css";

interface NotebookProps {
  src: string;
}

export function Notebook({ src }: NotebookProps) {
  const [ipynb, setIpynb] = useState<IpynbType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load notebook (${res.status})`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setIpynb(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? "Failed to load notebook");
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (error) {
    return (
      <p className="text-sm text-destructive">Notebook could not be loaded: {error}</p>
    );
  }

  if (!ipynb) {
    return (
      <div className="not-prose my-8 flex flex-col items-center gap-3 py-6">
        <LatentScatter
          width={220}
          height={90}
          duration={1.6}
          clusters={3}
          dotsPerCluster={18}
          seed={97}
        />
        <p className="text-sm text-muted-foreground">Loading notebook…</p>
      </div>
    );
  }

  return (
    <div className="notebook not-prose my-6">
      <IpynbRenderer ipynb={ipynb} />
    </div>
  );
}

export default Notebook;
