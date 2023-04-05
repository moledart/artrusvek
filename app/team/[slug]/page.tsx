import Image from "next/image";
import Link from "next/link";
import {
  getDocumentFromCollection,
  getDocumentsContainingSlug,
} from "../../../functions/firebase";
import SocialLinks from "../../../components/SocialLinks";

export default async function Page({ params }: { params: { slug: string } }) {
  const { thumbnail, name, role, birthday, education, description, socials } =
    await getDocumentFromCollection("actors", params.slug);

  const involvedInPlays = await getDocumentsContainingSlug(
    "plays",
    "actors",
    params.slug,
    "sortId"
  );

  return (
    <div className="max-w-4xl lg:mx-auto py-8 lg:py-0">
      <header className="flex gap-8 flex-col md:flex-row">
        <div className="flex-1 md:w-[40%] relative aspect-[3/4]">
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl text-neutral-200 font-bold leading-8">
            {name}
          </h2>
          <span className="block text-base text-neutral-400">{role}</span>
          <span className="param">Дата рождения</span>
          <p className="param-text">{birthday}</p>
          <span className="param">Образование</span>
          <p className="param-text">{education}</p>
          <SocialLinks socials={socials} />
          {involvedInPlays.length ? (
            <>
              <span className="param">Спектакли</span>
              <div className="flex gap-2">
                {involvedInPlays.map((play) => (
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
      {description && (
        <>
          <span className="param">Описание</span>
          {/* <p>{description}</p> */}
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="param-text"
          ></div>
        </>
      )}
    </div>
  );
}
