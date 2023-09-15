'use client';

import Link, {
  LinkProps,
} from "next/link";
import {
  usePathname,
} from "next/navigation";
import {
  PropsWithChildren,
} from "react";

type Props = LinkProps & PropsWithChildren & {
  className?: string,
  activeClassName: string,
};
export function ActiveLink({ href, children, activeClassName, className, ...props }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const style = isActive ? activeClassName : className;
  return (
    <Link className={style} href={href} {...props}>{children}</Link>
  );
}
