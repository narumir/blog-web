import dayjs from 'dayjs';
import {
  cookies,
} from 'next/headers';
import {
  NextResponse,
} from 'next/server'
import {
  accessTokenCookieName,
  baseURL,
  defaultCookieOptions,
  getAccessToken,
  refreshTokenCookieName,
} from 'src/utils'

const getPath = (req: Request) => {
  const url = new URL(req.url);
  return `/${url.pathname.split("/").slice(2).join("/")}`;
};
const getBody = async (req: Request) => {
  const body = await req.json();
  return JSON.stringify(body ?? "");
};
const signin = async (path: string, body?: string) => {
  const fetchOption: RequestInit = {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(`${baseURL}${path}`, fetchOption);
  const data = await res.json();
  if (res.status === 200 || res.status === 201) {
    const cookiesStore = cookies();
    if (data.accessToken != null) {
      cookiesStore.set(accessTokenCookieName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
    }
    if (data.refreshToken != null) {
      cookiesStore.set(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
    }
    return NextResponse.json({ success: true });
  }
  return NextResponse.json(data, { status: res.status });
};
const signout = async (path: string) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get(refreshTokenCookieName);
  const fetchOption: RequestInit = {
    method: "POST",
    body: JSON.stringify({ token: token }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch(`${baseURL}${path}`, fetchOption);
  cookiesStore.delete(refreshTokenCookieName);
  cookiesStore.delete(accessTokenCookieName);
  return NextResponse.json({ success: true });
};

const handler = async (req: Request) => {
  const path = getPath(req);
  const body = req.method !== "GET" && req.method !== "DELETE" ? await getBody(req) : undefined;
  if (path === "/auth/signin") {
    return signin(path, body);
  }
  if (path === "/auth/signout") {
    return signout(path);
  }
  const accessToken = await getAccessToken();
  const fetchOption: RequestInit = {
    method: req.method,
    body,
    headers: {
      ...req.headers,
      ...(accessToken != null ? { "Authorization": `bearer ${accessToken}` } : {}),
    },
  };
  const res = await fetch(`${baseURL}${path}`, fetchOption);
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
};

export const GET = (req: Request) => handler(req);
export const POST = (req: Request) => handler(req);
export const PATCH = (req: Request) => handler(req);
export const PUT = (req: Request) => handler(req);
export const DELETE = (req: Request) => handler(req);
