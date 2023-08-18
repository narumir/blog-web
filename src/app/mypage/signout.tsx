'use client';

import {
  signout,
} from "./actions";

const SignOut = () => {
  const onSignout = () => {
    signout().then((result) => {
      alert("로그아웃되었습니다.");
      window.location.href = "/";
    });
  }
  return (
    <button onClick={onSignout}>로그아웃</button>
  );
};

export default SignOut;
