'use server';

import dayjs from "dayjs";
import {
  cookies,
} from "next/headers";
import {
  redirect,
} from "next/navigation";
import {
  accessTokenCookieName,
  baseURL,
  defaultCookieOptions,
  fetcher,
  refreshTokenCookieName,
} from "src/utils";
import {
  JoinForm,
  LoginForm,
} from "src/types";

export const getPublicKey = async () => {
  const { data } = await fetcher("GET", `${baseURL}/encrypt/public-key`);
  return data.publicKey;
};

export const join = async (body: JoinForm) => {
  const { data, error } = await fetcher("POST", `${baseURL}/auth/join`, body);
  if (error == null) {
    const cookiesStore = cookies();
    cookiesStore.set(accessTokenCookieName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
    cookiesStore.set(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
    return redirect("/");
  }
  return { success: false };
};

export const signout = async () => {
  await fetcher("POST", `${baseURL}/auth/signout`, {});
  const cookiesStore = cookies();
  cookiesStore.set(accessTokenCookieName, "", { ...defaultCookieOptions, expires: 0 });
  cookiesStore.set(refreshTokenCookieName, "", { ...defaultCookieOptions, expires: 0 });
  return redirect("/");
};

export const signin = async (body: LoginForm) => {
  const { data, error } = await fetcher("POST", `${baseURL}/auth/signin`, body);
  if (error == null) {
    const cookiesStore = cookies();
    cookiesStore.set(accessTokenCookieName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
    cookiesStore.set(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
    return redirect("/");
  }
  return { success: false };
};
