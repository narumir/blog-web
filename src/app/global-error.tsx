'use client';

type Props = {
  error: Error,
  reset: () => void,
}
export default function GlobalError({ error, reset }: Props) {
  return (
    <html lang="ko">
      <body>
        <h1>Something went wrong!</h1>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
