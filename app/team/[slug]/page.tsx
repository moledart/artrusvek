import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../../../components/SocialLinks";
import { TEAM } from "../../../data/actors";
import { PLAYS, TPlay } from "../../../data/plays";

export default async function Page({ params }: { params: { slug: string } }) {
  const teamMember = TEAM.find((actor) => actor.slug === params.slug);

  let involvedInPlays: TPlay[] = [];

  if (teamMember && teamMember.playedIn) {
    involvedInPlays = teamMember.playedIn
      .map((playSlug) => PLAYS.find((play) => play.slug === playSlug))
      .filter(Boolean) as TPlay[];
  }

  if (!teamMember) {
    return {
      notFound: true,
    };
  }

  return (
    <div className="max-w-4xl lg:mx-auto py-8 lg:py-0">
      <header className="flex gap-8 flex-col md:flex-row">
        <div className="flex-1 md:w-[40%] relative aspect-[3/4]">
          <Image
            src={teamMember.thumbnail}
            alt={teamMember.name}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl text-neutral-200 font-bold leading-8">
            {teamMember.name}
          </h2>
          <span className="block text-base text-neutral-400">
            {teamMember.role}
          </span>
          <span className="param">Дата рождения</span>
          <p className="param-text">{teamMember.birthday}</p>
          <span className="param">Образование</span>
          <p className="param-text">{teamMember.education}</p>
          <SocialLinks socials={teamMember.socials} />
          {involvedInPlays?.length ? (
            <>
              <span className="param">Спектакли</span>
              <div className="flex gap-2">
                {involvedInPlays?.map((play) => (
                  <Link
                    href={`/plays/${play.slug}`}
                    key={play.id}
                    className="uppercase flex items-center px-2 bg-zinc-700 rounded-sm hover:bg-mainDark basic-animation text-xs h-8 whitespace-nowrap mt-2"
                  >
                    {play.name}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </header>
      {teamMember.description && (
        <>
          <span className="param">Описание</span>
          <div
            dangerouslySetInnerHTML={{ __html: teamMember.description }}
            className="param-text"
          ></div>
        </>
      )}
    </div>
  );
}
