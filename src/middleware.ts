import createMiddleware from "next-intl/middleware";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "pt-br"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt-br|en)/:path*"],
};

let headers = { "accept-language": "pt-br,pt,en;en-us;q=0.5" };

let languages = new Negotiator({ headers }).languages();

let locales = ["en", "pt-br"];

let defaultLocale = "en";

match(languages, locales, defaultLocale, {
  algorithm: "best fit",
}); // -> 'en-US'
