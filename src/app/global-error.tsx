'use client';

type Props = {
  error: Error,
  reset: () => void,
}
export default function GlobalError({ error, reset }: Props) {
  return (
    <html lang="ko">
      <body>
        <div className="m-auto text-center mt-16">
          <h1 className="font-black text-9xl">500</h1>
          <h2 className="text-2xl">OOPS! SOMETHING WENT WRONG</h2>
          <button className="bg-blue-500 text-white block w-32 text-center m-auto p-4 rounded-xl mt-8 leading-4" onClick={() => reset()}>Try again</button>
        </div>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
