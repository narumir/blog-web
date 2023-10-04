'use server';

import {
  fetcher,
} from "src/fetcher";
import {
  baseURL,
} from "src/utils";

export const getPublicKey = async () => {
  const { data } = await fetcher<string>("GET", `${baseURL}/v1/encrypt/publickey`);
  return data.replace(/\\n/g, '\n');
};
