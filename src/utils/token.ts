import {
  headers,
} from "next/headers";

export const getAccessToken = () => {
  const headersList = headers();
  const [type, token] = headersList.get("authorization")?.split(" ") ?? [];
  if (type?.toLowerCase() !== "bearer") {
    return;
  }
  return token;
};
