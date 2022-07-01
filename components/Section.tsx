import Link from 'next/link';
import React from 'react';

interface SectionProps {
  title: string;
  link: string;
  linkText: string;
  children: React.ReactNode;
}

const Section = ({ title, link, linkText, children }: SectionProps) => {
  return (
    <section className="py-8 relative">
      <header className="flex mb-8 items-center">
        <h2 className="text-3xl font-bold leading-8">{title}</h2>
        <Link href={link}>
          <a className="uppercase flex items-center px-2 bg-zinc-700 rounded-sm hover:bg-zinc-600 basic-animation text-xs h-8 ml-auto md:ml-4 whitespace-nowrap">
            {linkText}
          </a>
        </Link>
      </header>
      {children}
    </section>
  );
};

export default Section;
