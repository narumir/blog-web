import dayjs from "dayjs";
import {
  cookies,
} from "next/headers";
import {
  AuthToken,
  CookieOptions,
  ResponseToken,
} from "./types";
import { NextResponse } from "next/server";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const cn = (...args: string[]) => {
  return args
    .map(val => val.trim())
    .filter(val => val.length > 0)
    .join(" ");
};

export const decodeToken = <T = any>(token: string): T => {
  const [_, payload] = token.split(".");
  return JSON.parse(Buffer.from(payload, "base64").toString());
};

export const getAccessToken = async () => {
  const current = dayjs();
  const cookiesStore = cookies();
  const refershToken = cookiesStore.get(refreshTokenName);
  if (refershToken == null || refershToken.value.length < 5) {
    return;
  }
  const decodeRefreshToken = decodeToken(refershToken.value);
  const refreshTokenExpires = dayjs(decodeRefreshToken["exp"] * 1000);
  if (current.isAfter(dayjs(refreshTokenExpires).add(-1, "hours"))) {
    const newRefreshToken = await getNewToken(`${baseURL}/v1/auth/refresh-token`, refershToken.value);
    refershToken.value = newRefreshToken.refreshToken;
    const option: Partial<ResponseCookie> = {
      ...defaultCookieOptions,
      expires: dayjs(newRefreshToken.refreshTokenExpiredAt).toDate(),
    }
    cookiesStore.set(refreshTokenName, newRefreshToken.refreshToken, option);
  }
  let accessToken = cookiesStore.get(accessTokenName);
  if (accessToken != null && accessToken.value.length > 5) {
    return accessToken.value;
  }
  const newAccessToken = await getNewToken(`${baseURL}/v1/auth/access-token`, refershToken.value);
  const option: Partial<ResponseCookie> = {
    ...defaultCookieOptions,
    expires: dayjs(newAccessToken.accessTokenExpiredAt).toDate(),
  };
  cookiesStore.set(accessTokenName, newAccessToken.accessToken, option);
  return newAccessToken.accessToken;
};

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
export const accessTokenName = "_SeA";
export const refreshTokenName = "_SeR";
export const defaultCookieOptions: CookieOptions = {
  secure: process.env.NODE_ENV === "production",
  domain: process.env.NODE_ENV === "production" ? ".narumir.io" : undefined,
  httpOnly: true,
  path: "/",
  sameSite: "lax",
};

export const getNewToken = async (url: string, token: string): Promise<ResponseToken> => {
  const fetchOption: RequestInit = {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, fetchOption);
  return res.json();
};

export const updateTokenCookies = (token: ResponseToken, res: NextResponse) => {
  if (token.accessToken != null) {
    const option: Partial<ResponseCookie> = {
      ...defaultCookieOptions,
      expires: dayjs(token.accessTokenExpiredAt).toDate(),
    };
    res.cookies.set(accessTokenName, token.accessToken, option);
  }
  if (token.refreshToken != null) {
    const option: Partial<ResponseCookie> = {
      ...defaultCookieOptions,
      expires: dayjs(token.refreshTokenExpiredAt).toDate(),
    };
    res.cookies.set(refreshTokenName, token.refreshToken, option);
  }
};


export const getAuthorization = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get(refreshTokenName);
  if (token == null || token.value.length < 2) {
    return { isAuth: false };
  }
  const { nickname } = decodeToken<AuthToken>(token.value);
  return { isAuth: true, nickname, profile: "" };
};
