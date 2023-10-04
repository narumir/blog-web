

export const registerCredentials = async () => {
  const cred = await navigator.credentials.create({
    publicKey: {
      rp: {
        name: "narumir",
        id: window.location.hostname,
      },
      user: {
        displayName: "narumir",
        id: Uint8Array.from("RANDOM", (c) => c.charCodeAt(0)),
        name: "test",
      },
      challenge: Uint8Array.from("RANDOM", (c) => c.charCodeAt(0)),
      pubKeyCredParams: [
        {
          type: "public-key", // ECDSA with SHA-256
          alg: -7,
        },
        {
          type: "public-key",
          alg: -257 // RSASSA-PKCS1-v1_5 with SHA-256
        },
      ],
      timeout: 1800000,
      attestation: "direct",
      authenticatorSelection: {
        authenticatorAttachment: "platform",
      },
    }
  });
  if (cred == null) {
    return;
  }
  cred.id;
  cred.type

};

export const getCredentials = async () => {
  const cred = await navigator.credentials.get({
    publicKey: {
      challenge: Uint8Array.from(
        "RANDOM", c => c.charCodeAt(0)),
      allowCredentials: [{
        id: Uint8Array.from(
          credentialId, c => c.charCodeAt(0)),
        type: 'public-key',
        transports: ['usb', 'ble', 'nfc'],
      }],
      timeout: 60000,
    }
  });
  cred?.id;

};
