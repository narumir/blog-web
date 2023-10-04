export type AuthToken = {
  sub: string,
  nickname: string,
  profile: string,
  iat: number,
  exp: number,
}

export type CookieOptions = {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  path?: string;
  sameSite?: boolean | 'lax' | 'strict' | 'none';
  secure?: boolean;
  priority?: 'low' | 'medium' | 'high';
  maxAge?: number;
};

export type ResponseToken = {
  accessToken: string,
  accessTokenExpiredAt: number,
  refreshToken: string,
  refreshTokenExpiredAt: number,
};
