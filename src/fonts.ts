import {
  Noto_Sans,
  Noto_Sans_KR,
  Noto_Sans_JP,
} from "next/font/google";

export const notoSans = Noto_Sans({
  preload: true,
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const notoSansKR = Noto_Sans_KR({
  preload: false,
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const notoSansJP = Noto_Sans_JP({
  preload: false,
  weight: ["100", "300", "400", "500", "700", "900"],
});
