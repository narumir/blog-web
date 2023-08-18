'use client';

import {
  signout,
} from "./actions";

const SignOut = () => {
  const onSignout = () => {
    signout();
  }
  return (
    <button onClick={onSignout}>로그아웃</button>
  );
};

export default SignOut;
