import {
  FC,
  PropsWithChildren,
} from "react";
import SignOut from "./signout";

const MyPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>
        <SignOut />
      </div>
      {children}
    </div>
  );
};

export default MyPageLayout;
