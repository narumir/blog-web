import Link from "next/link";
import {
  useCallback,
} from "react";
import {
  ChevronUp,
} from "src/icon";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const onClick = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <footer className="border-t-[1px] w-full">
      <div className="container m-auto p-5">
        <div className="cursor-pointer flex items-center text-lg text-[#808080] mb-5" onClick={onClick}>
          <ChevronUp className="mr-2" /> back to top
        </div>
        <hr className="mb-16" />
        <div>&copy; {currentYear} &middot; <Link className="text-blue-500" href={"https://blog.narumir.io"}>narumir.io</Link> &middot; All rights reserved.</div>
      </div>
    </footer>
  );
};
