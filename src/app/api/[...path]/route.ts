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
  return `/${url.pathname.split("/").slice(2).join("/")}${url.search}`;
};
const getBody = async (req: Request) => {
  const body = await req.json();
  return JSON.stringify(body ?? "");
};
const credentialsPOST = async (req: Request, path: string, body?: string) => {
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

const handler = async (req: Request) => {
  const path = getPath(req);
  const body = req.method !== "GET" && req.method !== "DELETE" ? await getBody(req) : undefined;
  if (path.startsWith("/auth/")) {
    return credentialsPOST(req, path, body);
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
