import React, { CSSProperties, useEffect, useState } from "react";
import { css } from "@emotion/css";

export type ViewSemanticElement =
  | "div"
  | "article"
  | "aside"
  | "header"
  | "footer";

export interface ViewProps {
  semanticTag?: ViewSemanticElement;
  className?: string[];
  children?: React.ReactNode;
  style?: CSSProperties;
}

export function View(props: ViewProps) {
  //
  const [className, setClassName] = useState<string | undefined>();
  useEffect(
    () => setClassName([...(props.className ?? []), "view"].join(" ")),
    [props.className],
  );

  const tagAttributes = { className: className };
  const tagChildren = props.children;

  // Match a semantic tag to a ReactNode
  const Tag = (): React.ReactNode => {
    switch (props.semanticTag) {
      case undefined:
      case "div":
        return <div {...tagAttributes}>{tagChildren}</div>;
      case "article":
        return <article {...tagAttributes}>{tagChildren} </article>;
      case "aside":
        return <aside {...tagAttributes}>{tagChildren} </aside>;
      case "header":
        return <header {...tagAttributes}>{tagChildren} </header>;
      case "footer":
        return <footer {...tagAttributes}>{tagChildren} </footer>;
    }
  };

  return <Tag />;
}
