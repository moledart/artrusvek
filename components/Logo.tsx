import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex flex-col leading-none cursor-pointer" href={"/"}>
      <span className="text-[32px] font-bold tracking-wider">ArtRusVek</span>
      <div className="text-sm text-zinc-500 tracking-wider">
        продюсерская компания
      </div>
    </Link>
  );
};

export default Logo;
