import {
  PropsWithChildren,
} from "react";
import {
  Header,
  Sidebar
} from "src/components";
import {
  getAuthorization,
} from "src/utils";
import "./globals.css";

export const metadata = {
  title: "narumir's blog",
  description: "narumir's blog",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const auth = await getAuthorization();
  return (
    <html
      lang="ko"
    >
      <body
        className="bg-[#F2F2F2] w-full flex justify-stretch"
      >
        <Sidebar />
        <div
          className="flex-1 relative"
        >
          <Header
            isAuth={auth.isAuth}
            profile={auth.profile}
          />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
