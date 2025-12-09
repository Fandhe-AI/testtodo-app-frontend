import type { SVGProps } from "react";

type Props = Omit<SVGProps<SVGSVGElement>, "style">;

export const Hidden = ({ children, ...props }: Props) => (
  <svg style={{ width: "0", height: "0", visibility: "hidden" }} {...props}>
    <title>Fandhe Icon</title>
    <defs>{children}</defs>
  </svg>
);
