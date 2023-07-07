import dynamic from "next/dynamic";

export const EditorJS = dynamic(() =>
  import("./editor").then(({ EditorComponent }) => EditorComponent),
  {
    ssr: false,
    loading: () => (<p>loading...</p>),
  }
);
