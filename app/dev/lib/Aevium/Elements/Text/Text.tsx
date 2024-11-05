import { css } from "@emotion/css";
import React, { CSSProperties, useEffect, useState } from "react";

import { CSS } from "@Aevium/Aevium";
export type TextSemanticElement = "span" | "p" | "u" | "b" | "del";

export type TextFontFamily = "Headline" | "Paragraph";
export function getTextFontFamilyCssRule(
  f?: TextFontFamily,
  w?: number,
  s?: "normal" | "italic",
): string {
  f ??= "Paragraph";
  w ??= 400;
  s ??= "normal";

  switch (f) {
    case "Paragraph":
      return `font-family: "Quicksand", sans-serif; font-optical-sizing: auto; font-weight: ${w}; font-style: ${s}; `;
    case "Headline":
      return `font-family: "Poiret One", sans-serif; font-weight: ${w}; font-style: ${s}; `;
  }
}

export interface TextProps {
  semanticTag?: TextSemanticElement;
  className?: string[];
  children?: React.ReactNode;
  fontFamily?: TextFontFamily;
  fontWeight?: number;
  fontStyle?: "normal" | "italic";
  fontSize?: number;
  textColor?: string;
  style?: CSSProperties;
}

export function Text(props: TextProps) {
  const fontSize = props.fontSize ?? 14;
  const textColor = props.textColor ?? CSS("Slate(950)");

  const [className, setClassName] = useState<string | undefined>();
  useEffect(
    () =>
      setClassName(
        [
          css`
            color: ${textColor};
          `,
          css`
            font-size: ${CSS(fontSize)};
          `,
          ...(props.className ?? []),
          css`
            ${getTextFontFamilyCssRule(
              props.fontFamily,
              props.fontWeight,
              props.fontStyle,
            )};
          `,
        ].join(" "),
      ),
    [props.className],
  );

  const tagAttributes = { className: className };
  const tagChildren = props.children;

  // Match a semantic tag to a ReactNode
  const Tag = (): React.ReactNode => {
    switch (props.semanticTag) {
      case undefined:
      case "span":
        return <span {...tagAttributes}>{tagChildren}</span>;
      case "p":
        return <p {...tagAttributes}>{tagChildren}</p>;
      case "u":
        return <u {...tagAttributes}>{tagChildren}</u>;
      case "b":
        return <b {...tagAttributes}>{tagChildren}</b>;
      case "del":
        return <del {...tagAttributes}>{tagChildren}</del>;
    }
  };

  return <Tag />;
}
