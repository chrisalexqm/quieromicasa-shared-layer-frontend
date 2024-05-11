import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

import { quieromicasa_blueprint } from "./config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    join(currentDir, "./material-theme/theme.css"),
    join(currentDir, "./assets/css/main.scss"),
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "vuetify-nuxt-module",
    "@nuxtjs/google-fonts",
  ],
  vuetify: {
    vuetifyOptions: {
      blueprint: quieromicasa_blueprint,
      directives: true,
      labComponents: true,
    },
  },
  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": [400, 500, 600],
    },
  },
});
