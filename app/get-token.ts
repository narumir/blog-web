import dayjs from "dayjs";
import axios from "~/axios";
import {
  data,
} from "react-router";
import {
  accessTokenCookie,
  refreshTokenCookie,
} from "./cookies";
import type {
  AccessToken,
} from "./models";

export const auth = async <T>(request: Request, cn: (token?: string) => Promise<T>) => {
  const cookieHeaders = request.headers.get("Cookie");
  const refreshToken = await refreshTokenCookie.parse(cookieHeaders);
  if (refreshToken == null) {
    const result = await cn();
    if (result instanceof Response) {
      return result;
    }
    return data(result);
  }
  const accessToken: string = await accessTokenCookie.parse(cookieHeaders);
  if (accessToken == null) {
    const { data: token } = await axios.post<AccessToken>("/api/v1/auth/access-token", { refreshToken });
    const result = await cn(token.accessToken);
    if (result instanceof Response) {
      result.headers.append("Set-Cookie", await accessTokenCookie.serialize(token.accessToken, { expires: dayjs(token.accessTokenExpires).toDate() }));
      return result;
    }
    return data(result, {
      headers: [
        ["Set-Cookie", await accessTokenCookie.serialize(token.accessToken, { expires: dayjs(token.accessTokenExpires).toDate() })],
      ],
    });
  }
  const result = await cn(accessToken);
  if (result instanceof Response) {
    return result;
  }
  return data(result);
}
