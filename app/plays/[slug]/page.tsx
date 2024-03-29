import Image from "next/image";
import Actor from "../../../components/Actor";
import { Slider } from "../../../components/Slider";
import { TEAM } from "../../../data/actors";
import { PLAYS } from "../../../data/plays";

const photoOptions = {
  size: "20%",
  breakpoints: [
    { maxWidth: "md", slideSize: "50%" },
    { maxWidth: "sm", slideSize: "90%" },
  ],
};

const actorsOptions = {
  size: "20%",
  breakpoints: [
    { maxWidth: "md", slideSize: "30%" },
    { maxWidth: "sm", slideSize: "45%" },
  ],
};

export default async function Page({ params }: { params: { slug: string } }) {
  const play = PLAYS.find((play) => play.slug === params.slug);

  const actors = TEAM.filter((actor) => actor.playedIn.includes(params.slug));

  if (!play) {
    return {
      notFound: true,
    };
  }

  const photoSlides = play.photos.map((photo: any) => (
    <div className="w-full aspect-video md:aspect-square relative">
      <Image
        src={photo}
        alt="Фото спектакля"
        fill
        className="rounded-md cursor-pointer object-cover object-top"
      />
    </div>
  ));

  const actorSlides = actors
    .sort((a, b) => a.sortId - b.sortId)
    .map((actor) => <Actor actor={actor} />);

  return (
    <div className="max-w-4xl lg:mx-auto py-8 lg:py-0 relative overflow-hidden">
      {/* <PhotoModal
        clickedPhoto={clickedPhoto}
        setClickedPhoto={setClickedPhoto}
        isFullScreen={isFullScreen}
        setFullScreen={setFullScreen}
      /> */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl text-neutral-200 font-bold leading-none lg:text-3xl">
          {play.name}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-zinc-400">Рейтинг</span>
          <div className="text-2xl bg-main text-neutral-50 px-4 py-2 rounded-md font-bold leading-tight">
            {play.rating}
          </div>
        </div>
      </header>
      <div className="mt-4 w-full aspect-video relative">
        <Image
          src={play.thumbnail}
          alt={play.name}
          priority
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-wrap gap-x-16 mb-8">
        <div className="flex flex-col mt-6">
          <span className="text-neutral-400">Страна</span>
          <p>Россия</p>
        </div>
        <div className="flex flex-col mt-6">
          <span className="text-neutral-400">Продолжительность</span>
          <p>{play.length}</p>
        </div>
        <div className="flex flex-col mt-6">
          <span className="text-neutral-400">Жанр</span>
          <p>{play.genre.toLowerCase()}</p>
        </div>
      </div>
      <section className="py-8">
        <h2 className="text-3xl text-neutral-200 font-bold leading-8 mb-8">
          Описание
        </h2>
        <p>{play.description}</p>
      </section>
      <section className="py-8 relative">
        <h2 className="text-3xl text-neutral-200 font-bold leading-8 mb-8">
          Фото спектакля
        </h2>
        <Slider slides={photoSlides} options={photoOptions} />
      </section>
      <section className="py-8 relative">
        <h2 className="text-3xl text-neutral-200 font-bold leading-8 mb-8">
          В ролях
        </h2>
        <Slider slides={actorSlides} options={actorsOptions} />
      </section>
      {play.youtubeLink && (
        <section className="py-8">
          <h2 className="text-3xl text-neutral-200 font-bold leading-8 mb-8">
            Видео
          </h2>
          <iframe
            width="100%"
            height="auto"
            src={play.youtubeLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ aspectRatio: "16/9" }}
          ></iframe>
        </section>
      )}
    </div>
  );
}
