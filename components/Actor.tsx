import React from 'react';
import { ActorType } from '../types/categories';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Props {
  actor: ActorType;
  roleVisible?: boolean;
}

const Actor = ({ actor, roleVisible = false }: Props) => {
  const { photo, name, role, slug } = actor;
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/team/${slug}`)}
      className="actor group"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={photo || 'https://picsum.photos/200/300'}
          alt={name}
          layout="responsive"
          objectFit="cover"
          width={5}
          height={7}
          className=" lg:group-hover:scale-105 basic-animation"
        />
      </div>
      <h3 className="card-header line-break mt-4 mb-0">{name}</h3>
      {roleVisible && <span className="text-sm text-neutral-400">{role}</span>}
    </article>
  );
};

export default Actor;
