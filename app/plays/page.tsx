import { getAllDocumentsFromCollection } from "../../functions/firebase";
import Play from "../../components/Play";
import { PlayType } from "../../types/categories";
import { PLAYS, TPlay } from "../../data/plays";

export default async function Page() {
  return (
    <section>
      <h2 className="text-3xl font-bold leading-8 mb-8">Спектакли</h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8">
        {PLAYS.map((play: TPlay) => (
          <Play play={play} key={play.id} />
        ))}
      </div>
    </section>
  );
}
