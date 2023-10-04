import {
  getAccessToken,
} from "./utils";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type ResponseType<T> = {
  data: T,
  error: any,
};

export const fetcher = async <T = any>(method: HttpMethod, url: string, body?: any): Promise<ResponseType<T>> => {
  const isBodyMethod = method !== "GET" && method !== "DELETE";
  const accessToken = await getAccessToken();
  const fetchOption: RequestInit = {
    method,
    credentials: "include",
    cache: "no-cache",
    headers: {
      ...(isBodyMethod && { "Content-Type": "application/json" }),
      ...(accessToken != null && { "Authorization": `bearer ${accessToken}` }),
    },
    body: isBodyMethod ? JSON.stringify(body) : undefined,
  };
  const res = await fetch(url, fetchOption);
  return res.json();
};
