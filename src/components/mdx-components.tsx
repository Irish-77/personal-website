import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { Notebook } from "./notebook";

/**
 * Components usable inside MDX blog posts:
 *   <Image src="..." alt="..." width={...} height={...} />
 *   <Callout type="info|warning|danger">...</Callout>
 *   <Notebook src="/assets/notebooks/your.ipynb" />
 */
const components = {
  Image,
  Callout,
  Notebook,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
