import {
  CubeTransparentIcon,
  DocumentIcon,
  DuplicateDocumentIcon,
  NewsPaperIcon,
} from "src/icons";
import {
  ActiveLink,
} from "./active-link";

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
}
export function Navigator({ absolute = false, expend = true }: Props) {
  return (
    <nav className={`w-full z-40 bg-[#F2F2F2] ${absolute ? 'absolute' : ''}`}>
      {expend && <p className="mx-10 my-4 text-xs font-medium text-gray-500">New Feeds</p>}
      <ul className="m-5">
        {menus.map(({ href, name, Icon }, i) => (
          <li key={i}>
            <ActiveLink
              href={href}
              activeClassName="block rounded-xl p-4 bg-violet-500 text-white "
              className="block rounded-xl p-4 text-gray-500">
              <Icon
                className="inline-block mr-4"
              />
              {expend && name}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
