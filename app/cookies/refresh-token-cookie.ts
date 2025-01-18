import {
  createCookie,
} from "react-router";

export const refreshTokenCookie = createCookie("refresh-token", {
  httpOnly: true,
  secure: import.meta.env.NODE_ENV === "production",
  path: "/",
  sameSite: "strict",
}); 
