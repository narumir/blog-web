import Link from "next/link";

export default function NotFound() {
  return (
    <div className="m-auto text-center mt-16">
      <h1 className="font-black text-9xl">404</h1>
      <h2 className="text-2xl">OOPS! NOTHING WAS FOUND </h2>
      <Link className="bg-blue-500 text-white block w-32 text-center m-auto p-4 rounded-xl mt-8 leading-4" href={"/"}>Go to home</Link>
    </div>
  );
}
