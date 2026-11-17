// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Oxanium",
      cssVariable: "--font-oxanium",
      weights: [500, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "inter",
      cssVariable: "--font-inter",
      weights: [400, 600],
    },
  ],
});

// https://astro.build/config
