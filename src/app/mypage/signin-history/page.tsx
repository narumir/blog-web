import {
  MYPageSubLayout,
} from "../mypage-sublayout";

export default function SigninHistoryPage() {
  const histories = [1];
  return (
    <MYPageSubLayout
      title="Signin History"
    >
      {histories.map((_, i) => (
        <div
          className="border-b-2 text-sm mt-2"
          key={i}
        >
          <table
            className="w-full"
          >
            <tbody
              className="text-left"
            >
              <tr>
                <th>Access from</th>
                <td>IOS(16.1)</td>
              </tr>
              <tr>
                <th>Browser</th>
                <td>Edge(100.1)</td>
              </tr>
              <tr>
                <th>Signin IP</th>
                <td>2a09:bac5:4733:174b:0000:0000:252:2000</td>
              </tr>
              <tr>
                <th>Initial signin</th>
                <td>2023-09-23 20:22(KST)</td>
              </tr>
            </tbody>
          </table>
          <button
            className="bg-red-500 text-base font-bold rounded-xl text-white py-3 px-5 my-3 leading-4"
          >
            signout
          </button>
        </div>
      ))}
    </MYPageSubLayout>
  );
}
