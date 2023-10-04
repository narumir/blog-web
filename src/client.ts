'use client';

import JSEncrypt from "jsencrypt";

export const encryptData = (publicKey: string, data: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encryptResult = encrypt.encrypt(data);
  if (encryptResult === false) {
    throw new Error("Fail to encrypt data");
  }
  return encryptResult;
};
