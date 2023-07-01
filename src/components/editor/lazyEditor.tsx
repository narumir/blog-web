import dynamic from "next/dynamic";

export const Editor = dynamic(() =>
  import("./editor").then(({ Editor }) => Editor),
  { ssr: false }
);
