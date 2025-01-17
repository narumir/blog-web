import type {
  PropsWithChildren,
} from "react";

export function NavigationDropDown({ children }: PropsWithChildren) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-4 flex justify-end items-center gap-4"
    >
      {children}
    </div>
  );
}
