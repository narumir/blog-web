import dayjs from "dayjs";
import {
  NextRequest,
  NextResponse,
} from "next/server";
import {
  accessTokenCookieName,
  baseURL,
  decodeToken,
  defaultCookieOptions,
  refreshTokenCookieName,
} from "./utils";

const renewToken = async (token: string, url: string, res: NextResponse) => {
  const fetchOption: RequestInit = {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, fetchOption);
  if (response.status !== 200 && response.status !== 201) {
    throw new Error("fail to renew token.");
  }
  const { data } = await response.json();
  if (data.refreshToken != null) {
    res.cookies.set(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
  }
  if (data.accessToken != null) {
    res.cookies.set(accessTokenCookieName, data.accessToken as string, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
  }
  return data;
};

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const cookiesStore = req.cookies;
  let refreshToken = cookiesStore.get(refreshTokenCookieName)?.value;
  if (!cookiesStore.has(refreshTokenCookieName) || refreshToken == null || refreshToken.length === 0) {
    return res;
  }
  const current = dayjs();
  const decodeRefreshToken = decodeToken(refreshToken);
  const refreshTokenExpires = dayjs(decodeRefreshToken["exp"] * 1000);
  if (current.isAfter(refreshTokenExpires.add(-1, "hour"))) {
    const data = await renewToken(refreshToken, `${baseURL}/auth/refresh-token`, res);
    refreshToken = data.refreshToken as string;
  }
  let accessToken = cookiesStore.get(accessTokenCookieName)?.value;
  if (!cookiesStore.has(accessTokenCookieName) || accessToken == null) {
    const data = await renewToken(refreshToken, `${baseURL}/auth/access-token`, res);
    res.headers.set("authorization", data.accessToken);
    return res;
  }
  const decodeAccessToken = decodeToken(accessToken);
  const accessTokenExpiredAt = dayjs(decodeAccessToken["exp"] * 1000);
  if (current.isAfter(accessTokenExpiredAt.add(-1, "minute"))) {
    const data = await renewToken(refreshToken, `${baseURL}/auth/access-token`, res);
    accessToken = data.accessToken as string;
  }
  res.headers.set("authorization", accessToken);
  return res;
};

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
