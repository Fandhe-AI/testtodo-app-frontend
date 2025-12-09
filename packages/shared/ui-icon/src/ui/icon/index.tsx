import type { ComponentProps, SVGProps } from "react";
import { Root } from "../root";
import { Use } from "../use";

type UseProps = ComponentProps<typeof Use>;

type Props = Omit<SVGProps<SVGSVGElement>, "children"> & {
  type?: UseProps["type"];
  name: UseProps["name"];
};

export const Icon = ({ type = "symbol", name, ...props }: Props) => (
  <Root name={name} {...props}>
    <Use type={type} name={name} />
  </Root>
);
