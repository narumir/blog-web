import dynamic from "next/dynamic";
import {
  domain,
} from "src/utils";

const getPublicKey = async () => {
  const res = await fetch(`${domain}/api/encrypt/public-key`, { method: "GET" });
  const data = await res.json();
  return data.publicKey;
};
const Login = dynamic(() => import("./login"), { ssr: false });
const LoginPage = async () => {
  const publicKey = await getPublicKey();
  return (
    <div>
      <Login publicKey={publicKey} />
    </div>
  );
};

export default LoginPage;
