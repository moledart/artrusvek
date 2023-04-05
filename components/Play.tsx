import Image from "next/image";
import Link from "next/link";
import { PlayType } from "../types/categories";

interface Props {
  play: PlayType;
}

const Play = ({ play }: Props) => {
  const { name, genre, rating, thumbnail, briefInfo, slug } = play;

  return (
    <Link href={`/plays/${slug}`}>
      <article className=" cursor-pointer group">
        <div className="rounded-lg overflow-hidden relative h-52">
          <Image
            src={thumbnail || "https://picsum.photos/200/300"}
            alt={name}
            fill={true}
            className=" lg:group-hover:scale-105 basic-animation object-cover object-top"
          />
          <div className="absolute top-3 right-3 bg-zinc-700 rounded-md text-main px-3 py-1 text-sm">
            {rating}
          </div>
        </div>
        <h3 className="card-header font-bold mt-4 text-2xl">{name}</h3>
        <span className="text-sm text-neutral-400">{genre.toLowerCase()}</span>
        <p className="text-neutral-400 mt-2">{briefInfo}</p>
      </article>
    </Link>
  );
};

export default Play;
