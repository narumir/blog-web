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
  ssr: {
    noExternal: [
      "@tiptap/core",
      "@blocknote/core",
      "@blocknote/mantine",
      "@blocknote/react",
      "@blocknote/*",
    ]
  },
  // ssr: {
  //   noExternal: ['@blocknote/mantine', "@blocknote/react"], // 특정 라이브러리를 SSR에서 제외
  // },
  plugins: [reactRouter(), tsconfigPaths()],
});
