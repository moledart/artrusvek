import Actor from "../../components/Actor";
import { getAllDocumentsFromCollection } from "../../functions/firebase";

export default async function Page() {
  const actors = await getAllDocumentsFromCollection("actors", "sortId", 999);

  const producers = actors.filter((actor) => actor.role === "продюсер");
  const directors = actors.filter((actor) => actor.role === "режиссер");
  const crew = actors.filter((actor) => actor.role === "актер");
  const composers = actors.filter((actor) => actor.role === "композитор");
  const authors = actors.filter((actor) => actor.role === "автор");
  const arrangers = actors.filter((actor) => actor.role === "аранжировщик");

  return (
    <section>
      <h2 className="text-3xl font-bold leading-8 mb-8">Творческая группа</h2>
      <div className="flex flex-wrap gap-x-12 gap-y-12">
        <div className="actor_group">
          <div className="group_name">
            <span className="category">Продюсеры</span>
            <div className="line"></div>
          </div>
          <div className="actors_expand">
            {producers.length &&
              producers.map((actor) => <Actor actor={actor} key={actor.id} />)}
          </div>
        </div>
        <div className="actor_group">
          <div className="group_name">
            <span className="category">Режиссеры</span>
            <div className="line"></div>
          </div>
          <div className="actors_expand">
            {directors.length &&
              directors.map((actor) => <Actor actor={actor} key={actor.id} />)}
          </div>
        </div>
        <div className="actor_group">
          <div className="group_name">
            <span className="category">Авторы</span>
            <div className="line"></div>
          </div>
          <div className="actors_expand">
            {authors.length &&
              authors.map((actor) => <Actor actor={actor} key={actor.id} />)}
          </div>
        </div>
        <div className="actor_group">
          <div className="group_name">
            <span className="category">Композиторы</span>
            <div className="line"></div>
          </div>
          <div className="actors_expand">
            {composers.length &&
              composers.map((actor) => <Actor actor={actor} key={actor.id} />)}
          </div>
        </div>
        <div className="actor_group">
          <div className="group_name">
            <span className="category">Аранжировщики</span>
            <div className="line"></div>
          </div>
          <div className="actors_expand">
            {arrangers.length &&
              arrangers.map((actor) => <Actor actor={actor} key={actor.id} />)}
          </div>
        </div>

        <div className="actor_group">
          <div className="group_name">
            <span className="category">Актеры</span>
            <div className="line"></div>
          </div>
          <div className="actors_expand">
            {crew.length &&
              crew.map((actor) => <Actor actor={actor} key={actor.id} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
