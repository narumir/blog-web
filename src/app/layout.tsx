import {
  PropsWithChildren,
} from "react";
import {
  Header,
  Sidebar
} from "src/components";
import "./globals.css";

export const metadata = {
  title: "narumir's blog",
  description: "narumir's blog",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className="bg-[#fcfdfd]">
        <div className="w-full flex justify-stretch ">
          <Sidebar />
          <div className="flex-1 relative">
            <Header />
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
