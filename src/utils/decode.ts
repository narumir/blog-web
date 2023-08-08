export const decodeToken = (token: string) => {
  if (typeof window === "undefined") {
    const [_, payload,] = token.split(".");
    return JSON.parse(Buffer.from(payload, "base64").toString());
  }
  const [_, payload] = token.split(".") ?? [];
  const base64Payload = payload.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(window.atob(base64Payload).split("").map((val) => {
    return "%" + ("00" + val.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
  return JSON.parse(jsonPayload);
};
