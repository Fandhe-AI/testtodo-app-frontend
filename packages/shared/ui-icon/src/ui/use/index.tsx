import { type SVGProps, useMemo } from "react";
import {
  ICON_PREFIX_GRADIENT,
  ICON_PREFIX_LOGO,
  ICON_PREFIX_SYMBOL,
  type IconGradient,
  type IconLogo,
  type IconSymbol,
} from "../../config";

type Props = SVGProps<SVGUseElement> & {
  type: "logo" | "symbol" | "gradient";
  name: IconLogo | IconSymbol | IconGradient;
};

export const Use = ({ type, name, ...props }: Props) => {
  const xlinkHref = useMemo<string>(() => {
    switch (type) {
      case "logo":
        return ICON_PREFIX_LOGO;
      case "symbol":
        return ICON_PREFIX_SYMBOL;
      case "gradient":
        return ICON_PREFIX_GRADIENT;
    }
    return ICON_PREFIX_SYMBOL;
  }, [type]);

  return <use xlinkHref={`#${xlinkHref}-${name}`} {...props} />;
};
