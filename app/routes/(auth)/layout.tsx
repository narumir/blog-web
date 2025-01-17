import {
  Outlet,
} from "react-router";
import {
  Fragment,
} from "react/jsx-runtime";

export default function AuthLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
