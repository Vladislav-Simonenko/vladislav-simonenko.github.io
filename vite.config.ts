import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import SvgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    SvgLoader(),
    {
      name: "vite-plugin-svg",
    },
  ],
  base: "/itp-landing-page",
});
