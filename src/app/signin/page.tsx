import {
  Suspense,
  lazy,
} from "react";
import {
  domain,
} from "src/utils";

const getPublicKey = async () => {
  const res = await fetch(`${domain}/api/encrypt/public-key`, { method: "GET" });
  const { data } = await res.json();
  return data.publicKey;
};
const Signin = lazy(() => import("./signin"));
const SigninPage = async () => {
  const publicKey = await getPublicKey();
  return (
    <div className="container m-auto px-5 w-full">
      <h1 className="font-black text-5xl sm:text-7xl pt-16 pb-6">SIGNIN</h1>
      <Suspense>
        <Signin publicKey={publicKey} />
      </Suspense>
    </div>
  );
};

export default SigninPage;
