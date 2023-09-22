'use client';

import QRCode, {
  QRCodeSegment,
} from "qrcode";
import {
  promisify,
} from "util";
import {
  Dialog,
  Switch,
} from "@headlessui/react";
import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowLeftIcon, XMarkIcon,
} from "src/icons";

export default function MFAPage() {
  const [MFAEnabled, setMFAEnabled] = useState<boolean>(false);
  const [pwModalOpen, setPWModalOpen] = useState<boolean>(false);
  const onPWModalSelfClose = () => {
    setPWModalOpen(false);
    setMFAEnabled(false);
  }
  const qrcodeRef = useRef<HTMLCanvasElement>(null);
  const onMFASwitchClick = () => {
    setPWModalOpen((prev) => !prev);
  };
  useLayoutEffect(() => {
    if (qrcodeRef.current == null) {
      return;
    }
    const createQRCode = promisify<HTMLCanvasElement, string | QRCodeSegment[]>(QRCode.toCanvas);
    createQRCode(qrcodeRef.current, "https://blog.narumir.io");
  }, []);
  return (
    <div
      className="p-4"
    >
      <div
        className="w-full md:max-w-[760px] m-auto rounded-2xl bg-white p-4"
      >
        <div
          className="flex items-center py-2"
        >
          <button>
            <ArrowLeftIcon
              className="text-black"
            />
          </button>
          <h2
            className="text-xl font-bold ml-2"
          >
            Manage MFA
          </h2>
        </div>
        <div
          className="flex justify-between items-center text-gray-500"
        >
          Enable
          <Switch
            checked={MFAEnabled}
            onChange={onMFASwitchClick}
            className={`${MFAEnabled ? 'bg-violet-500' : 'bg-[#F0F3F6]'} px-1 flex items-center h-7 w-16 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <div
              aria-hidden="true"
              className={`${MFAEnabled ? 'translate-x-9' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            >
              <span
                className="block m-1 bg-blue-500 w-3 h-3 rounded-full"
              />
            </div>
          </Switch>
        </div>
        <canvas
          ref={qrcodeRef}
          className="m-auto"
        />
        <h3
          className="text-gray-500 mb-2"
        >
          Recovery codes
        </h3>
        <div
          className="bg-gray-100 rounded-xl py-2 text-center"
        >
          <p>r3d32ds4</p>
          <p>r3d32ds4</p>
          <p>r3d32ds4</p>
          <p>r3d32ds4</p>
          <p>r3d32ds4</p>
          <p>r3d32ds4</p>
        </div>
        <p className="text-xs text-red-500">The above code must always be backed up. And for security reasons, it will not be shown again.</p>
        <label
          htmlFor="mfa"
          className="block mb-2 text-gray-500 mt-6"
        >
          MFA code
        </label>
        <input
          autoComplete="one-time-code"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          type="text"
          id="mfa"
          className="w-full bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="mfa code"
          maxLength={6}
        />
        <button
          className="w-full bg-violet-500 text-white rounded-xl py-2 px-3 mt-4"
        >
          active
        </button>
      </div>
      <Dialog open={pwModalOpen} onClose={() => undefined}>
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center sm:p-4">
          <Dialog.Panel className="w-full max-w-md overflow-y-auto h-screen sm:h-fit max-h-screen sm:rounded-3xl p-6 sm:p-12 bg-white relative">
            <Dialog.Title className="text-2xl font-semibold mt-8 sm:mt-0 mb-6">
              Enter password
            </Dialog.Title>
            <button
              className="absolute top-6 right-6"
              onClick={onPWModalSelfClose}
            >
              <XMarkIcon
                className="text-black"
              />
            </button>
            <label
              htmlFor="passowrd"
              className="block mb-2 text-gray-500 mt-6"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
              placeholder="password"
            />
            <button
              className="w-full bg-violet-500 text-white rounded-xl py-2 px-3 mt-4"
            >
              continue
            </button>
          </Dialog.Panel>
        </div>

      </Dialog>
    </div>
  );
}
