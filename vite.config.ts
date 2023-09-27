import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import SvgLoader from "vite-svg-loader";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react(),
      SvgLoader(),
      {
        name: "vite-plugin-svg",
      },
    ],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/wh1tepythons.github.io/";
  }

  return config;
});
