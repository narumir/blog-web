import {
  Suspense,
  lazy,
} from "react";
import {
  getPublicKey,
} from "src/actions";

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
