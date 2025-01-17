import {
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export function NoSSR({ children }: PropsWithChildren) {
  const [isClient, setClient] = useState<boolean>(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return isClient ? children : null;
}
