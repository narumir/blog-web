'use client';

import JSEncrypt from "jsencrypt";

export type LoginForm = {
  username: string;
  password: string;
}

export const encryptPassword = (publicKey: string, password: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encryptResult = encrypt.encrypt(password);
  if (encryptResult === false) {
    throw new Error("Fail to encrypt password.");
  }
  return encryptResult;
};

export const signin = async (body: LoginForm) => {
  const fetchOption: RequestInit = {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch("/api/auth/signin", fetchOption);
  const data = await response.json();
  return data;
};
