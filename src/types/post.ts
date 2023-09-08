import {
  OutputData,
} from "@editorjs/editorjs";
import {
  User,
} from "./user";

export type Post = {
  id: string,
  title: string,
  content: OutputData,
  preview: string,
  createdAt: string,
  updatedAt: string,
  thumbnail?: string,
  user: User;
};
