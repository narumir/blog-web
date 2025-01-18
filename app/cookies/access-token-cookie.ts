import {
  createCookie,
} from "react-router";

export const accessTokenCookie = createCookie("access-token", {
  httpOnly: true,
  secure: import.meta.env.NODE_ENV === "production",
  path: "/",
  sameSite: "lax",
}); 
