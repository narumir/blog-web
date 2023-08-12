"use client";

import {
  ChevronUp,
} from "src/icon";

export const FooterBackToTop = () => {
  const onClick = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="cursor-pointer flex items-center text-lg text-[#808080] mb-5" onClick={onClick}>
      <ChevronUp className="mr-2" /> back to top
    </div>
  );
};
