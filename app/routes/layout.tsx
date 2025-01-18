import axios from "~/axios";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Link,
  Outlet,
  useLoaderData,
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
import {
  auth,
} from "~/get-token";
import type {
  Route,
} from "./+types/layout";
import type {
  Member,
} from "~/models";

export async function loader({ request }: Route.LoaderArgs) {
  return await auth(request, async (accessToken) => {
    if (accessToken == null) {
      return;
    }
    const { data } = await axios.get<Member>("/api/v1/members/profile", {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    return data;
  });
}

export default function RootLayout() {
  const profile = useLoaderData<typeof loader>();
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
                {profile != null
                  ? <button>
                    로그아웃
                  </button>
                  : <Link to="/login">
                    로그인
                  </Link>}
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
