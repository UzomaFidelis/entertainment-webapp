"use client";

import { usePathname } from "next/navigation";
import Logo from "@/components/icons/Logo";
import NavHomeIcon from "@/components/icons/NavHomeIcon";
import Link from "next/link";
import NavMoviesIcon from "@/components/icons/NavMoviesIcon";
import NavTvIcon from "@/components/icons/NavTvIcon";
import NavBookmarkIcon from "@/components/icons/NavBookmarkIcon";
import { useEffect, useState } from "react";
import User from "@/components/User";

const MoviesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const [desktopViewport, setDesktopViewport] = useState(isDesktopViewport());

  useEffect(() => {
    const setViewportOnResize = () => {
      setDesktopViewport(isDesktopViewport());
    };
    window.addEventListener("resize", setViewportOnResize);

    return () => {
      window.removeEventListener("resize", setViewportOnResize);
    };
  }, []);

  function isDesktopViewport() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      console.log("large viewport");
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="content md:p-6 lg:flex lg:gap-9 lg:items-start lg:pl-8 lg:pr-0">
      <header className="bg-night flex md:rounded-lg lg:flex-col lg:justify-between lg:items-center lg:pb-10 lg:gap-[31.8rem]">
        <div className="flex w-full justify-between items-center p-4 md:py-5 md:pl-6 md:pr-4  lg:flex-col lg:gap-[4.7rem] lg:py-11 lg:px-6 xl:px-8">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-6 items-center md:gap-8 lg:flex-col lg:gap-[2.5rem]">
              <li>
                <Link href="/">
                  <NavHomeIcon active={pathname === "/"} />
                </Link>
              </li>
              <li>
                <Link href="/movies">
                  <NavMoviesIcon active={pathname === "/movies"} />
                </Link>
              </li>
              <li>
                <Link href="/tv-series">
                  <NavTvIcon active={pathname === "/tv-series"} />
                </Link>
              </li>
              <li>
                <Link href="/bookmark">
                  <NavBookmarkIcon active={pathname === "/bookmark"} />
                </Link>
              </li>
            </ul>
          </nav>
          {!desktopViewport && <User />}
        </div>
        {desktopViewport && <User />}
      </header>
      <main className="lg:flex-1">{children}</main>
    </div>
  );
};

export default MoviesLayout;
