'use server';

import dayjs from "dayjs";
import {
  cookies,
} from "next/headers";
import {
  accessTokenCookieName,
  baseURL,
  defaultCookieOptions,
  refreshTokenCookieName,
} from "src/utils";

export type LoginForm = {
  username: string;
  password: string;
}

export const loginAction = async (form: LoginForm) => {
  const res = await fetch(`${baseURL}/auth/signin`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 401) {
    return false;
  }
  const data = await res.json();
  const cookiesStore = cookies();
  cookiesStore.set(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
  cookiesStore.set(accessTokenCookieName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
  return true;
};

export const getPublicKey = async () => {
  const res = await fetch(`${baseURL}/encrypt/public-key`, { method: "GET" });
  const data = await res.json();
  return data.publicKey;
};
