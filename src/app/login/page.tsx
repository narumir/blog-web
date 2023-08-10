import {
  getPublicKey,
} from "./actions";
import {
  Login,
} from "./login";

const LoginPage = async () => {
  const publicKey = await getPublicKey();
  return (
    <div>
      <Login publicKey={publicKey} />
    </div>
  );
};

export default LoginPage;
