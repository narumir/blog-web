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

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const cookiesStore = req.cookies;
  let refreshToken = cookiesStore.get(refreshTokenCookieName)?.value;
  if (!cookiesStore.has(refreshTokenCookieName) || refreshToken == null) {
    return NextResponse.next();
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
    refreshToken = data.refreshToken as string;
    res.cookies.set(refreshTokenCookieName, refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
  }
  const renewAccessToken = async () => {
    const data = await fetch(`${baseURL}/auth/access-token`, {
      method: "POST",
      body: JSON.stringify({ token: refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    res.cookies.set(accessTokenCookieName, data.accessToken as string, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
    res.headers.set("authorization", data.accessToken);
    return res;
  };
  let accessToken = cookiesStore.get(accessTokenCookieName)?.value;
  if (!cookiesStore.has(accessTokenCookieName) || accessToken == null) {
    return await renewAccessToken();
  }
  const decodeAccessToken = decodeToken(accessToken);
  const accessTokenExpiredAt = dayjs(decodeAccessToken["exp"] * 1000);
  if (current.isAfter(accessTokenExpiredAt.add(-1, "minute"))) {
    return await renewAccessToken();
  }
  res.headers.set("authorization", accessToken);
  return res;
};

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
