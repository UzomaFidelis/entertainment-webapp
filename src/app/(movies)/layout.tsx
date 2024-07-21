"use client";

import { usePathname } from "next/navigation";
import Logo from "@/components/icons/Logo";
import NavHomeIcon from "@/components/icons/NavHomeIcon";
import Link from "next/link";
import NavMoviesIcon from "@/components/icons/NavMoviesIcon";
import NavTvIcon from "@/components/icons/NavTvIcon";
import NavBookmarkIcon from "@/components/icons/NavBookmarkIcon";
import Image from "next/image";

const MoviesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <div className="content">
      <header className="flex justify-between items-center p-4 bg-night">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 items-center">
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
        <div className="rounded-full border border-white">
          <Image src="/assets/user.png" alt="" width={22} height={22} />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MoviesLayout;
