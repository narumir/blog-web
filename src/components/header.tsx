import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-24 sm:h-28 w-full border-b-[1px]">
      <div className="container m-auto">
        <nav>
          <Link href={"story"}>story</Link>
        </nav>
      </div>
    </header>
  );
};
