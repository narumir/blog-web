import dayjs from "dayjs";
import {
  NextRequest,
  NextResponse,
} from "next/server";
import {
  decodeToken,
} from "src/utils";

const baseURL = process.env.BASE_URL ?? "https://api-blog.narumir.io";

export async function middleware(req: NextRequest) {
  const cookieStore = req.cookies;
  const isSigned = cookieStore.has("x-token");
  const accessToken = cookieStore.has("a-token") && isSigned
    ? cookieStore.get("a-token")?.value
    : undefined;
  if (accessToken == null) {
    return NextResponse.next();
  }
  const decode = decodeToken(accessToken);
  const expires = dayjs(decode["exp"] * 1000);
  const current = dayjs().add(-1, "minute");
  if (current.isAfter(expires)) {
    const refreshToken = cookieStore.get("x-token")?.value;
    const res = await fetch(`${baseURL}/auth/access-token`, { method: "POST", headers: { Cookie: `x-token=${refreshToken}` } })
    const data = await res.json();
    return NextResponse.next({
      headers: {
        'Set-Cookie': `a-token=${data.accessToken}`,
        'authorization': `bearer ${data.accessToken}`,
      },
    });
  }
  return NextResponse.next({ headers: { authorization: `bearer ${accessToken}` } });
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
