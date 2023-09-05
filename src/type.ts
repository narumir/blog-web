import {
  OutputData,
} from "@editorjs/editorjs";

export type User = {
  nickname: string;
}

export type Post = {
  id: string,
  title: string,
  content: OutputData,
  preview: string,
  createdAt: string,
  updatedAt: string,
  user: User;
};

export type HttpError = {
  status: number,
  code: string,
  field?: string,
};

export interface HttpResponse<T> {
  data: T;
  error?: HttpError;
}
