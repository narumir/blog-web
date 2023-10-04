'use server';

import dayjs from "dayjs";
import {
  NextRequest,
  NextResponse,
} from "next/server";
import {
  accessTokenName,
  decodeToken,
  defaultCookieOptions,
  refreshTokenName,
  baseURL,
} from "./utils";

const renewToken = async (token: string, url: string, res: NextResponse) => {
  const response = await fetch(url, { method: "POST", body: JSON.stringify({ token }) });
  const data = await response.json();
  if (data.refreshToken != null) {
    res.cookies.set(refreshTokenName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
  }
  if (data.accessToken != null) {
    res.cookies.set(accessTokenName, data.accessToken as string, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
  }
  return data;
};

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const cookiesStore = req.cookies;
  let refreshToken = cookiesStore.get(refreshTokenName)?.value;
  if (refreshToken == null || refreshToken.length === 0) {
    return res;
  }
  const current = dayjs();
  const decodeRefreshToken = decodeToken(refreshToken);
  const refreshTokenExpires = dayjs(decodeRefreshToken["exp"] * 1000);
  if (current.isAfter(refreshTokenExpires.add(-1, "hour"))) {
    const data = await renewToken(refreshToken, `${baseURL}/v1/auth/refresh-token`, res);
    refreshToken = data.refreshToken as string;
  }
  let accessToken = cookiesStore.get(accessTokenName)?.value;
  if (accessToken == null || accessToken.length === 0) {
    await renewToken(refreshToken, `${baseURL}/v1/auth/access-token`, res);
    return res;
  }
  const decodeAccessToken = decodeToken(accessToken);
  const accessTokenExpiredAt = dayjs(decodeAccessToken["exp"] * 1000);
  if (current.isAfter(accessTokenExpiredAt.add(-1, "minute"))) {
    const data = await renewToken(refreshToken, `${baseURL}/v1/auth/access-token`, res);
    accessToken = data.accessToken as string;
  }
  return res;
};

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
