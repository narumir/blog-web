'use server';

import {
  redirect,
} from "next/navigation";
import {
  Post,
} from "src/types";
import {
  baseURL,
  fetcher,
} from "src/utils";

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await fetcher("GET", `${baseURL}/post`);
  return data;
};

export const createPost = async (title?: string, content?: any) => {
  const { data, error } = await fetcher("POST", `${baseURL}/post`, { title, content });
  if (error == null) {
    return redirect("/");
  }
  return {};
};
