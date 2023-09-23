import {
  MYPageSubLayout,
} from "../mypage-sublayout";

export default function PasskeysPage() {
  const passkeys = [1];
  return (
    <MYPageSubLayout
      title="Passkeys"
    >
      <p className="mb-6">
        Passkeys is help you securely sign in to your account using fingerprint, face or screen lock.<br />Passkeys can only be used in the browser you set it to.
      </p>
      {passkeys.map((_, i) => (
        <div
          key={i}
          className="border-b-2"
        >
          <table
            className="w-full"
          >
            <tbody
              className="text-left"
            >
              <tr>
                <th>Register device</th>
                <td>IOS(16.1)</td>
              </tr>
              <tr>
                <th>Browser</th>
                <td>Edge(100.1)</td>
              </tr>
              <tr>
                <th>Registered IP</th>
                <td>2a09:bac5:4733:174b:0000:0000:252:2000</td>
              </tr>
              <tr>
                <th>registered date</th>
                <td>2023-09-23 20:22(KST)</td>
              </tr>
              <tr>
                <th>regitser type</th>
                <td>fingerprint, screenlock, face</td>
              </tr>
            </tbody>
          </table>
          <button
            className="bg-red-500 text-base font-bold rounded-xl text-white py-3 px-5 my-3 leading-4"
          >
            delete passkey
          </button>
        </div>
      ))}

      <button
        className="rounded-2xl py-3 bg-violet-500 px-6 text-white leading-5 mt-6 w-full "
      >
        create passkeys
      </button>
    </MYPageSubLayout >
  );
}
