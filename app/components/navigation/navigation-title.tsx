import {
  Link,
} from "react-router"

type NavigationTitleProps = {
  title: string,
}
export function NavigationTitle({ title }: NavigationTitleProps) {
  return (
    <h1
      className="text-center text-2xl font-bold h-full flex justify-center items-center"
    >
      <Link to={"/"}>
        {title}
      </Link>
    </h1>
  );
}
