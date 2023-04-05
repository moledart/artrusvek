"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { links } from "./util";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const navLinks = links.map(({ path, text }, index) => (
    <li key={index} className="inline-flex">
      <Link
        href={path}
        className={`flex items-center w-full justify-end py-4 px-8 rounded-sm hover:bg-dawn hover:text-main basic-animation lg:w-auto ${
          pathname == path ? "active" : ""
        }`}
        onClick={() => setIsVisible(false)}
      >
        {text}
      </Link>
    </li>
  ));

  const buttonText = isVisible ? "Закрыть" : "Меню";

  return (
    <header
      className={`px-5 py-6 ${
        isVisible &&
        "h-screen w-full overflow-hidden fixed left-0 top-0 z-10 bg-night lg:relative"
      }`}
    >
      <nav className="flex flex-col h-full items-stretch lg:flex-row lg:justify-between leading-none">
        <div className="flex w-full justify-between lg:w-auto">
          <Logo />
          <button
            className="rounded-lg border-zinc-400 border w-[116px] lg:hidden"
            onClick={() => setIsVisible(!isVisible)}
          >
            {buttonText}
          </button>
        </div>
        <ul
          className={`${
            isVisible ? "flex" : "hidden"
          } flex-col h-full justify-center lg:flex lg:flex-row lg:items-stretch lg:justify-start lg:h-auto`}
        >
          {navLinks}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
