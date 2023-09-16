import {
  cn,
} from "src/utils";
import {
  ActiveLink,
} from "./active-link";
import {
  CubeTransparentIcon,
  DocumentIcon,
  DuplicateDocumentIcon,
  NewsPaperIcon,
} from "src/icons";

const menus = [
  {
    name: "Posts",
    Icon: DocumentIcon,
    href: "/",
  },
  {
    name: "Series",
    Icon: DuplicateDocumentIcon,
    href: "/series",
  },
  {
    name: "Assets",
    Icon: CubeTransparentIcon,
    href: "/assets",
  },
  {
    name: "News",
    Icon: NewsPaperIcon,
    href: "/news",
  },
];

type Props = {
  absolute?: boolean,
  expend?: boolean,
  onClick?: () => void,
}
export function Nav({ absolute = false, expend = true, onClick }: Props) {
  const styles = cn("w-full z-50 bg-[#F2F2F2]", ...(absolute ? ["absolute"] : []));
  return (
    <nav className={styles}>
      {expend && <p className="mx-10 my-4 text-xs font-medium text-gray-500">New Feeds</p>}
      <ul className="m-5">
        {menus.map(({ href, name, Icon }, i) => (
          <li key={i}>
            <ActiveLink
              onClick={onClick}
              href={href}
              activeClassName="block rounded-xl px-4 py-4 bg-violet-500 text-white "
              className="block rounded-xl px-4 py-4 text-gray-500">
              <Icon className="inline-block mr-4" />
              {expend && name}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
