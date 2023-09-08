import {
  lazy,
} from "react";
import {
  getPublicKey,
} from "src/actions";

const Join = lazy(() => import("./join"));
const JoinPage = async () => {
  const publicKey = await getPublicKey();
  return (
    <div className="container m-auto px-5 w-full">
      <h1 className="font-black text-5xl sm:text-7xl pt-16 pb-6">JOIN</h1>
      <Join publicKey={publicKey} />
    </div>
  );
};

export default JoinPage;
