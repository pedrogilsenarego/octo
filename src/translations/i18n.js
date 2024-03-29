import i18n from "i18next";

import backend from "i18next-http-backend";
import { content } from "./languages";

i18n
  // .use(LanguageDetector)
  .use(backend)
  .init({
    debug: false,
    defaultNS: ["translations"],
    fallbackLng: "en",
    ns: ["translations"],
    resources: content,
  });

export { i18n };
