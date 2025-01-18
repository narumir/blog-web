import {
  createCookie,
} from "react-router";

export const themeCookie = createCookie("theme", {
  path: "/",
  httpOnly: false,
  secure: false,
  sameSite: "lax",
  maxAge: 99999999999,
});
