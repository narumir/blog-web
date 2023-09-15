import {
  cn,
} from "src/utils";
import {
  ActiveLink,
} from "./active-link";
import {
  DocumentIcon,
} from "src/icons";

const menus = [
  {
    name: "New Feed",
    Icon: DocumentIcon,
    href: "/",
  },
  {
    name: "Posts",
    Icon: DocumentIcon,
    href: "/posts",
  },
  {
    name: "help",
    Icon: DocumentIcon,
    href: "/help",
  },
  {
    name: "New Feed",
    Icon: DocumentIcon,
    href: "/test",
  },
];

type Props = {
  absolute?: boolean,
  expend?: boolean,
  onClick?: () => void,
}
export function Menu({ absolute = false, expend = true, onClick }: Props) {
  const styles = cn("w-full bg-[#fcfdfd]", ...(absolute ? ["absolute"] : []));
  return (
    <div className={styles}>
      {expend && <p className="mx-10 my-4 text-xs font-medium text-gray-500">New Feeds</p>}
      <ul className="m-5">
        {menus.map(({ href, name, Icon }, i) => (
          <li key={i}>
            <ActiveLink
              onClick={onClick}
              href={href}
              activeClassName="block rounded-xl px-5 py-4 bg-violet-500 text-white "
              className="block rounded-xl px-5 py-4 text-gray-500">
              <Icon className="inline-block mr-4" />
              {expend && name}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
