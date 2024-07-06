import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config

export enum Locales {
  en = "en",
  "pt-br" = "pt-br",
}

export enum LocaleLabels {
  en = "English",
  "pt-br" = "Português",
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!Object.values(Locales).includes(locale as Locales)) {
    notFound();
  }
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
