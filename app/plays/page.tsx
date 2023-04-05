import { getAllDocumentsFromCollection } from "../../components/firebase";
import Play from "../../components/Play";
import { PlayType } from "../../types/categories";

export default async function Page() {
  const plays = await getAllDocumentsFromCollection("plays", "sortId", 10);

  return (
    <section>
      <h2 className="text-3xl font-bold leading-8 mb-8">Спектакли</h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8">
        {plays.map((play: PlayType) => (
          <Play play={play} key={play.id} />
        ))}
      </div>
    </section>
  );
}
