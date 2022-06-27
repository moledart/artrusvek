import React from 'react';
import Image from 'next/image';
import { NewsPostType } from '../types/categories';

interface Props {
  post: NewsPostType;
}

const NewsPost = ({ post }: Props) => {
  const { name, thumbnail, published, source, tag } = post;

  const date = new Date(published).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="flex flex-col snap-start shrink-0">
      <div className="rounded-lg overflow-hidden">
        <Image
          src={thumbnail}
          alt={name}
          layout="responsive"
          objectFit="cover"
          width={16}
          height={9}
        />
      </div>
      <span className="text-main text-sm mt-4">{tag}</span>
      <h3 className="card-header mb-2">{name}</h3>
      <span className="text-sm text-neutral-400">{date}</span>
    </article>
  );
};

export default NewsPost;
