import dynamic from "next/dynamic";
import {
  GetServerSideProps,
  NextPage,
} from "next";
import {
  domain,
} from "src/utils";

type PageProps = {
  publicKey: string;
}
const Login = dynamic(() => import("src/components/login").then(({ Login }) => Login), { ssr: false });
const LoginPage: NextPage<PageProps> = ({ publicKey }) => {
  return (
    <div>
      <Login publicKey={publicKey} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const res = await fetch(`${domain}/api/encrypt/public-key`, { method: "GET" });
  const data = await res.json();
  return {
    props: {
      publicKey: data.publicKey,
    },
  };
};

export default LoginPage;
