import Image from 'next/image';
import { useRouter } from 'next/router';
import { ActorType } from '../types/categories';

interface Props {
  actor: ActorType;
  roleVisible?: boolean;
}

const Actor = ({ actor, roleVisible = false }: Props) => {
  const { thumbnail, name, role, slug } = actor;
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/team/${slug}`)}
      className="actor group"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={thumbnail || 'https://picsum.photos/200/300'}
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
