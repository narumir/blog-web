'use client';

import {
  signout,
} from "src/actions";

const SignOut = () => {
  const onSignout = async () => {
    await signout();
    alert("로그아웃 되었습니다.");
  };
  return (
    <button onClick={onSignout}>로그아웃</button>
  );
};

export default SignOut;
