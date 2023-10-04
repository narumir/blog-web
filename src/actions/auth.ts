'use server';

import dayjs from "dayjs";
import {
  cookies,
} from "next/headers"
import {
  redirect,
} from "next/navigation";
import {
  fetcher,
} from "src/fetcher";
import {
  accessTokenName,
  baseURL,
  refreshTokenName,
  defaultCookieOptions,
} from "src/utils";

export const signup = async (email: string, nickname: string, password: string) => {
  const { data, error } = await fetcher("POST", `${baseURL}/v1/auth/signup`, { email, nickname, password });
  if (error == null) {
    const cookiesStore = cookies();
    cookiesStore.set(accessTokenName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
    cookiesStore.set(refreshTokenName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
    return redirect("/");

  }
  return error;
};

export const signin = async (email: string, password: string) => {
  const { data, error } = await fetcher("POST", `${baseURL}/v1/auth/signin`, { email, password });
  if (error == null) {
    const cookiesStore = cookies();
    cookiesStore.set(accessTokenName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() });
    cookiesStore.set(refreshTokenName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() });
    return redirect("/");
  }
  return error;
};

export const signout = async () => {
  const cookiesStore = cookies();
  await fetcher("POST", `${baseURL}/v1/auth/signout`, { token: cookiesStore.get(refreshTokenName) });
  cookiesStore.set(accessTokenName, "", { ...defaultCookieOptions, expires: 0 });
  cookiesStore.set(refreshTokenName, "", { ...defaultCookieOptions, expires: 0 });
  return redirect("/");
};
