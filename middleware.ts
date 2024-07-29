import createMiddleware from "next-intl/middleware";

import { localePrefix } from "./navigation";

import { locales } from "@/i18n";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "ru",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
