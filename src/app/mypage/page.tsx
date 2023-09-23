import Link from "next/link";
import {
  ArrowRightIcon,
} from "src/icons";

const manageContents = [
  {
    name: "My posts",
    href: "/mypage/posts",
  },
  {
    name: "My series",
    href: "/mypage/series",
  },
  {
    name: "My assets",
    href: "/mypage/assets",
  },
]

const securitySettings = [
  {
    name: "Update password",
    href: "/mypage/change-password",
  },
  {
    name: "Signin history",
    href: "/mypage/signin-history",
  },
  {
    name: "Manage MFA",
    href: "/mypage/mfa",
  },
  {
    name: "Register passkeys",
    href: "/mypage/passkeys",
  },
  {
    name: "Deactive account",
    href: "/mypage/deactive",
  },
];

export default function MyPage() {
  return (
    <div className="p-4">
      <div className="w-full md:max-w-[760px] m-auto rounded-2xl bg-white mb-4">
        <h2 className="text-xl p-4 font-bold">Manage contents</h2>
        <ul>
          {manageContents.map((setting, i) => (
            <li className="px-4 py-3 border-b-[1px]" key={i}>
              <Link className="flex justify-between items-center" href={setting.href}>
                {setting.name}
                <ArrowRightIcon className="text-gray-500" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:max-w-[760px] m-auto rounded-2xl bg-white mb-4">
        <h2 className="text-xl p-4 font-bold">Securty settings</h2>
        <ul>
          {securitySettings.map((setting, i) => (
            <li className="px-4 py-3 border-b-[1px]" key={i}>
              <Link className="flex justify-between items-center" href={setting.href}>
                {setting.name}
                <ArrowRightIcon className="text-gray-500" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
