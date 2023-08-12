import Link from "next/link";
import {
  FooterBackToTop,
} from "./back-to-top";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-[1px] w-full">
      <div className="container m-auto p-5">
        <FooterBackToTop />
        <hr className="mb-16" />
        <div>&copy; {currentYear} &middot; <Link className="text-blue-500" href={"https://blog.narumir.io"}>narumir.io</Link> &middot; All rights reserved.</div>
      </div>
    </footer>
  );
};
