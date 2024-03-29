import Actor from "../../components/Actor";
import { TEAM } from "../../data/actors";

export default async function Page() {
  const producers = TEAM.filter((actor) => actor.role === "продюсер");
  const directors = TEAM.filter((actor) => actor.role === "режиссер");
  const crew = TEAM.filter((actor) => actor.role === "актер");
  const composers = TEAM.filter((actor) => actor.role === "композитор");
  const authors = TEAM.filter((actor) => actor.role === "автор");
  const arrangers = TEAM.filter((actor) => actor.role === "аранжировщик");

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
