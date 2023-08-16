import dayjs from "dayjs";
import {
  NextApiResponse,
} from "next";
import {
  serialize,
} from 'cookie';

export const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://blog.narumir.io";
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

const renewRefreshToken = async (res: NextApiResponse, token: string) => {
  const fetchOption: RequestInit = {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${baseURL}/auth/refresh-token`, fetchOption);
  const data = await response.json();
  if (data.refreshToken != null) {
    res.setHeader("Set-Cookie", serialize(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() }))
  }
};
const renewAccessToken = async (res: NextApiResponse, token: string) => {
  const fetchOption: RequestInit = {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${baseURL}/auth/access-token`, fetchOption);
  const data = await response.json();
  if (data.accessToken != null) {
    res.setHeader("Set-Cookie", serialize(accessTokenCookieName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() }))
  }
  return data.accessToken;
};
export const getAccessToken = async (res: NextApiResponse, cookies: Partial<{ [key: string]: string; }>) => {
  let accessToken = cookies[accessTokenCookieName];
  if (accessToken != null) {
    return accessToken;
  }
  let refreshToken = cookies[refreshTokenCookieName];
  if (refreshToken == null) {
    return;
  }
  const current = dayjs();
  const decodeRefreshToken = decodeToken(refreshToken);
  const refreshTokenExpires = dayjs(decodeRefreshToken["exp"] * 1000);
  if (current.isAfter(refreshTokenExpires.add(-1, "hour"))) {
    await renewRefreshToken(res, refreshToken);
  }
  return renewAccessToken(res, refreshToken);
};
export const decodeToken = (token: string) => {
  const [_, payload] = token.split(".");
  return JSON.parse(Buffer.from(payload, "base64").toString());
};
export const cn = (...classes: string[]) => {
  return classes.join(" ");
};
export const cookieParser = (cookies: string) => {
  return cookies.split("; ").reduce((p, c) => {
    const [key, value] = c.split("=");
    p[key] = value;
    return p;
  }, {} as Record<string, string>);
};
export type Auth = {
  nickname: string;
  sub: string;
  iat: number;
  exp: number;
}
