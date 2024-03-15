import Image from "next/image";
import Link from "next/link";
import { TTeamMember } from "../data/actors";

interface Props {
  actor: TTeamMember;
  roleVisible?: boolean;
}

const Actor = ({ actor, roleVisible = false }: Props) => {
  const { thumbnail, name, role, slug } = actor;

  return (
    <Link href={`/team/${slug}`} className="actor">
      <article className="group">
        <div className="overflow-hidden rounded-lg h-56 lg:h-64 relative">
          <Image
            src={thumbnail || "https://picsum.photos/200/300"}
            alt={name}
            fill={true}
            className="lg:group-hover:scale-105 basic-animation object-cover object-top"
          />
        </div>
        <h3 className="card-header line-break mt-4 mb-0">{name}</h3>
        {roleVisible && (
          <span className="text-sm text-neutral-400">{role}</span>
        )}
      </article>
    </Link>
  );
};

export default Actor;
