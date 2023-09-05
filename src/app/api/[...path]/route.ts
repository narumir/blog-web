import dayjs from 'dayjs';
import {
  cookies,
} from 'next/headers';
import {
  NextRequest,
  NextResponse,
} from 'next/server'
import {
  accessTokenCookieName,
  baseURL,
  defaultCookieOptions,
  getAccessToken,
  refreshTokenCookieName,
} from 'src/utils'

const getOriginPathname = (req: NextRequest, params: string[]) => {
  const pathname = req.nextUrl.pathname.replace(/^\/api/, "");
  const queryParams = params.map((val) => `path=${val}`).join("&");
  const query = req.nextUrl.search.replace(queryParams, "");
  const search = new URLSearchParams(query);
  return `${pathname}${search.toString()}`;
};
const getStringifyBody = async (req: NextRequest) => {
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
  const { data } = await res.json();
  if (res.status === 200 || res.status === 201) {
    const cookiesStore = cookies();
    if (data.accessToken != null) {
      cookiesStore.set(accessTokenCookieName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
    }
    if (data.refreshToken != null) {
      cookiesStore.set(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
    }
    return NextResponse.json({ data: { success: true } });
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
  cookiesStore.set(accessTokenCookieName, "", { ...defaultCookieOptions, expires: 0 });
  cookiesStore.set(refreshTokenCookieName, "", { ...defaultCookieOptions, expires: 0 });
  return NextResponse.json({ success: true });
};
const handler = async (req: NextRequest, { params }: { params: { path: string[] } }) => {
  const path = getOriginPathname(req, params.path);
  const body = req.method !== "GET" && req.method !== "DELETE"
    ? await getStringifyBody(req)
    : undefined;
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
      "Content-Type": "application/json",
      ...(accessToken != null && { "Authorization": `bearer ${accessToken}` }),
    },
    cache: "no-store",
  };
  const res = await fetch(`${baseURL}${path}`, fetchOption);
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
};

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const DELETE = handler;
