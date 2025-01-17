import type {
  PropsWithChildren,
} from "react";

type NavigationProps = {

}
export function Navigation({ children }: PropsWithChildren<NavigationProps>) {
  return (
    <header
      className="w-full h-16 md:h-20 relative"
    >
      {children}
    </header>
  );
}
