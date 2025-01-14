import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";
import {
  reactRouter,
} from "@react-router/dev/vite";
import {
  defineConfig,
} from "vite";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
