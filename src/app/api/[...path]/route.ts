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
const credentialsPOST = async (req: Request) => {
  const path = getPath(req);
  const reqBody = await getBody(req);
  const res = await fetch(`${baseURL}${path}`, {
    method: "POST",
    headers: req.headers,
    body: reqBody,
  });
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

export async function GET(req: Request) {
  const accessToken = await getAccessToken();
  const path = getPath(req);
  const res = await fetch(`${baseURL}${path}`, {
    method: "GET",
    headers: {
      ...req.headers,
      ...(accessToken != null ? { "Authorization": `bearer ${accessToken}` } : {}),
    },
  });
  const body = await res.json();
  return NextResponse.json(body, { status: res.status });
}
export async function POST(req: Request) {
  const accessToken = await getAccessToken();
  const path = getPath(req);
  if (path.startsWith("/auth/")) {
    return credentialsPOST(req);
  }
  const reqBody = await getBody(req);
  const res = await fetch(`${baseURL}${path}`, {
    method: "POST",
    headers: {
      ...req.headers,
      ...(accessToken != null ? { "Authorization": `bearer ${accessToken}` } : {}),
    },
    body: reqBody,
  });
  const body = await res.json();
  return NextResponse.json(body, { status: res.status });
}
export async function PATCH(req: Request) {
  const accessToken = await getAccessToken();
  const path = getPath(req);
  const reqBody = await getBody(req);
  const res = await fetch(`${baseURL}${path}`, {
    method: "PATCH",
    headers: {
      ...req.headers,
      ...(accessToken != null ? { "Authorization": `bearer ${accessToken}` } : {}),
    },
    body: reqBody,
  });
  const body = await res.json();
  return NextResponse.json(body, { status: res.status });
}
export async function PUT(req: Request) {
  const accessToken = await getAccessToken();
  const path = getPath(req);
  const reqBody = await getBody(req);
  const res = await fetch(`${baseURL}${path}`, {
    method: "PUT",
    headers: {
      ...req.headers,
      ...(accessToken != null ? { "Authorization": `bearer ${accessToken}` } : {}),
    },
    body: reqBody,
  });
  const body = await res.json();
  return NextResponse.json(body, { status: res.status });
}
export async function DELETE(req: Request) {
  const accessToken = await getAccessToken();
  const path = getPath(req);
  const res = await fetch(`${baseURL}${path}`, {
    method: "DELETE",
    headers: {
      ...req.headers,
      ...(accessToken != null ? { "Authorization": `bearer ${accessToken}` } : {}),
    },
  });
  const body = await res.json();
  return NextResponse.json(body, { status: res.status });
}
