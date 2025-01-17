import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Link,
  Outlet,
} from "react-router";
import {
  Fragment,
} from "react/jsx-runtime";
import {
  DarkModeButton,
} from "~/components/dark-mode-button";
import {
  Footer,
} from "~/components/footer";
import {
  Navigation,
  NavigationDropDown,
  NavigationTitle,
} from "~/components/navigation";

export default function RootLayout() {
  return (
    <Fragment>
      <Navigation>
        <NavigationTitle
          title="나루미르"
        />
        <NavigationDropDown>
          <DarkModeButton />
          <Menu
            as="div"
            className="relative"
          >
            <MenuButton
              className="block"
            >
              <img
                alt="사용자 프로필 이미지"
                className="w-6 h-6 block rounded-full"
                src="/user.png"
              />
            </MenuButton>
            <MenuItems
              className="absolute top-full right-0 border  w-64 mt-4"
            >
              <MenuItem>
                <button
                  className="p-4"
                  type="button"
                >
                  item
                </button>
              </MenuItem>
              <hr />

              <MenuItem>
                <Link to="/signup">
                  {/* <button> */}
                  item
                  {/* </button> */}
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </NavigationDropDown>
      </Navigation>
      <Outlet />
      <Footer />
    </Fragment>
  );
}
