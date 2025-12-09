export const LanguageList = [
  {
    value: "ja",
    label: "日本語",
  },
  {
    value: "en",
    label: "English",
  },
] as const;

export const Language = LanguageList.map((language) => language.value);
export type Language = (typeof Language)[number];

export const DEFAULT_LANGUAGE = LanguageList[0].value;
