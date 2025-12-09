export const ICON_PREFIX = "icon";

export const ICON_PREFIX_LOGO = `${ICON_PREFIX}-logo`;
export const ICON_PREFIX_SYMBOL = `${ICON_PREFIX}-symbol`;
export const ICON_PREFIX_GRADIENT = `${ICON_PREFIX}-gradient`;

export const IconLogo = {} as const;
export type IconLogo = (typeof IconLogo)[keyof typeof IconLogo];

export const IconSymbol = {} as const;
export type IconSymbol = (typeof IconSymbol)[keyof typeof IconSymbol];

export const IconGradient = {} as const;
export type IconGradient = (typeof IconGradient)[keyof typeof IconGradient];

export const Icon = {
  ...IconLogo,
  ...IconSymbol,
  ...IconGradient,
} as const;
export type Icon = (typeof Icon)[keyof typeof Icon];
