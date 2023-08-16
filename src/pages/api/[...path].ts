import dayjs from 'dayjs';
import {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
} from 'next';
import {
  accessTokenCookieName,
  baseURL,
  defaultCookieOptions,
  getAccessToken,
  refreshTokenCookieName,
} from 'src/utils'
import {
  serialize,
} from 'cookie';

const getPath = (path: string) => {
  return `/${path.split("/").slice(2).join("/")}`;
};
const credentialsPOST = async (req: NextApiRequest, res: NextApiResponse) => {
  const path = getPath(req.url ?? "");
  const fetchOption: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  };
  const response = await fetch(`${baseURL}${path}`, fetchOption);
  const data = await response.json();
  if (response.status === 200 || response.status === 201) {
    return res
      .setHeader("Set-Cookie", [
        serialize(accessTokenCookieName, data.accessToken, { ...defaultCookieOptions, expires: dayjs(data.accessTokenExpiredAt).toDate() }),
        serialize(refreshTokenCookieName, data.refreshToken, { ...defaultCookieOptions, expires: dayjs(data.refreshTokenExpiredAt).toDate() }),
      ])
      .status(200)
      .json({ success: true });

  }
  return res.status(response.status).json(data);
};

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const path = getPath(req.url ?? "");
  if (path.startsWith("/auth/")) {
    return credentialsPOST(req, res);
  }
  const accessToken = await getAccessToken(res, req.cookies);
  const fetchOption: RequestInit = {
    method: req.method,
    headers: {
      ...(req.headers as HeadersInit),
      ...(accessToken != null ? { "Authorization": `bearer ${accessToken}` } : {}),
    },
    body: req.method !== "GET" && req.method !== "DELETE"
      ? JSON.stringify(req.body)
      : undefined,
  };
  const response = await fetch(`${baseURL}${path}`, fetchOption);
  const data = await response.json();
  return res.status(response.status).json(data);
};

export default handler;
