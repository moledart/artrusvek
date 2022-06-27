import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { PlayType } from '../types/categories';

interface Props {
  play: PlayType;
}

const Play = ({ play }: Props) => {
  const { name, genre, rating, thumbnail, briefInfo, slug } = play;
  const router = useRouter();

  return (
    <article
      className="relative cursor-pointer group"
      onClick={() => router.push(`/plays/${slug}`)}
    >
      <div className="rounded-lg overflow-hidden">
        <Image
          src={thumbnail || 'https://picsum.photos/200/300'}
          alt={name}
          layout="responsive"
          objectFit="cover"
          objectPosition="top"
          width={16}
          height={9}
          className=" lg:group-hover:scale-105 basic-animation"
        />
        <div className="absolute top-3 right-3 bg-zinc-700 rounded-md text-main px-3 py-1 text-sm">
          {rating}
        </div>
      </div>
      <h3 className="card-header font-bold mt-4 text-2xl">{name}</h3>
      <span className="text-sm text-neutral-400">{genre.toLowerCase()}</span>
      <p className="text-neutral-400 mt-2">{briefInfo}</p>
    </article>
  );
};

export default Play;
