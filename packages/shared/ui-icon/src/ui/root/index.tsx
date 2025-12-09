import type { SVGProps } from "react";
import type { Icon as IconType } from "../../config/index.ts";

type Props = SVGProps<SVGSVGElement> & {
  name: IconType;
};

export const Root = ({
  name,
  children,
  fill = "currentColor",
  ...props
}: Props) => (
  <svg fill={fill} {...props}>
    <title>{name}</title>
    {children}
  </svg>
);
