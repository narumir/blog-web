import dayjs from "dayjs";
import {
  cookies,
} from "next/headers";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://api-blog.narumir.io";
export type CookieOptions = {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  path?: string;
  sameSite?: boolean | 'lax' | 'strict' | 'none';
  secure?: boolean;
  priority?: 'low' | 'medium' | 'high';
  maxAge?: number;
};
export const defaultCookieOptions: CookieOptions = {
  secure: process.env.NODE_ENV === "production",
  domain: process.env.NODE_ENV === "production" ? ".narumir.io" : undefined,
  httpOnly: true,
  path: "/",
  sameSite: "lax",
};
export const accessTokenCookieName = "_Secure_jat";
export const refreshTokenCookieName = "_Secure_jrt";
export const getAccessToken = async () => {
  const cookiesStore = cookies();
  let accessToken = cookiesStore.get(accessTokenCookieName)?.value;
  if (accessToken != null) {
    return accessToken;
  }
  let refreshToken = cookiesStore.get(refreshTokenCookieName)?.value;
  if (refreshToken == null) {
    return;
  }
  const current = dayjs();
  const decodeRefreshToken = decodeToken(refreshToken);
  const refreshTokenExpires = dayjs(decodeRefreshToken["exp"] * 1000);
  if (current.isAfter(refreshTokenExpires.add(-1, "hour"))) {
    const data = await fetch(`${baseURL}/auth/refresh-token`, {
      method: "POST",
      body: JSON.stringify({ token: refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    refreshToken = data.refreshToken;
    cookiesStore.set(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() })
  }
  const data = await fetch(`${baseURL}/auth/access-token`, {
    method: "POST",
    body: JSON.stringify({ token: refreshToken }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  cookiesStore.set(accessTokenCookieName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
  return data.accessToken;
};
export const decodeToken = (token: string) => {
  const [_, payload] = token.split(".");
  return JSON.parse(Buffer.from(payload, "base64").toString());
};
