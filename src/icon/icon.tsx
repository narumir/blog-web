import {
  FC,
} from "react";
import {
  cn,
} from "src/utils-client";

type Props = {
  className?: string;
}
export const ChevronUp: FC<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("w-6 h-6", className ?? "")} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
};
