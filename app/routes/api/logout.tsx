import {
  data,
} from "react-router";
import {
  accessTokenCookie,
  refreshTokenCookie,
} from "~/cookies";
import type {
  Route,
} from "./+types/logout";

export async function action({ }: Route.ClientActionArgs) {
  return data({}, {
    headers: [
      ["Set-Cookie", await accessTokenCookie.serialize("", { maxAge: 1 })],
      ["Set-Cookie", await refreshTokenCookie.serialize("", { maxAge: 1 })],
    ],
  });
}

export default function Logout() {
  return null;
}
