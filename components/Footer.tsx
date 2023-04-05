import Link from "next/link";
//Icons
import { PhoneIcon, MailIcon } from "@heroicons/react/solid";

import Logo from "./Logo";
import { links } from "./util";

const Footer = () => {
  const navLinks = links.map(({ path, text }, index) => (
    <li key={index}>
      <Link
        href={path}
        className="flex w-full rounded-sm hover:text-main basic-animation text-zinc-500 mb-1"
      >
        {text}
      </Link>
    </li>
  ));

  return (
    <footer className="bg-zinc-800 mt-auto">
      <div className="px-5 py-12 gap-6 flex flex-col md:justify-between md:flex-row max-w-7xl mx-auto">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-1">
          <h4 className="mb-2">Карта сайта</h4>
          <ul>{navLinks}</ul>
        </div>
        <div id="contacts" className="flex-1">
          <h4>Контакты</h4>
          <p className="text-zinc-500 mb-4">
            По вопросам сотрудничества нас можно найти по&nbsp;следующим
            координатам
          </p>
          <a
            href="tel:+79263027135"
            className="flex hover:text-main mb-2 basic-animation"
          >
            <PhoneIcon className="w-7 h-7 mr-2" />
            <p className="text-xl">+7 (926) 302-71-35</p>
          </a>
          <a
            href="mailto:lazarevarusvek@mail.ru"
            className="flex hover:text-main basic-animation"
          >
            <MailIcon className="w-7 h-7 mr-2" />
            <p className="text-xl">lazarevarusvek@mail.ru</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
