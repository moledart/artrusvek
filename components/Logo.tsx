import { useRouter } from 'next/router';
import React from 'react';

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col leading-none cursor-pointer"
      onClick={() => router.push('/')}
    >
      <span className="text-[32px] font-bold tracking-wider">ArtRusVek</span>
      <div className="text-sm text-zinc-500 tracking-wide">
        продюссерская компания
      </div>
    </div>
  );
};

export default Logo;
