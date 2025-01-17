import axios from "app/axios";
import {
  useEffect,
  useState,
} from "react";
import type {
  Article,
} from "~/models";

export default function ArticlePage() {
  const [data, setData] = useState<Article>();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Article>(`/api/v1/articles/1`);
      setData(data);
      setLoading(false);
    })();
  }, []);
  if (isLoading || data == null) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <h1>{data.title}</h1>
      {data.content}
      {data.member.nickname}
    </div>
  );
}
