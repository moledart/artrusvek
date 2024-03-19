import { ActorList } from "../components/ActorList";
import { NewsList } from "../components/NewsList";
import { PlayList } from "../components/PlayList";
import Section from "../components/Section";
import { TEAM } from "../data/actors";
import { PLAYS } from "../data/plays";
import hygraph from "../functions/hygraph";

export default async function Page() {
  const news = await hygraph.getDataByCategory("news");

  return (
    <>
      <Section title="Спектакли" link="/plays" linkText="Все спектакли">
        <PlayList plays={PLAYS} />
      </Section>
      <Section title="Творческая группа" link="/team" linkText="Вся команда">
        <ActorList actors={TEAM} />
      </Section>
      <Section title="Новости" link="/news" linkText="Все новости">
        <NewsList news={news} />
      </Section>
    </>
  );
}
