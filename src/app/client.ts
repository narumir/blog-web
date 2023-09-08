'use client';

import JSEncrypt from "jsencrypt";

export const encryptPassword = (publicKey: string, password: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encryptResult = encrypt.encrypt(password);
  if (encryptResult === false) {
    throw new Error("Fail to encrypt password.");
  }
  return encryptResult;
};
