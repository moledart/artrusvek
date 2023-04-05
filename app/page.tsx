import { ActorList } from "../components/ActorList";
import { getAllDocumentsFromCollection } from "../components/firebase";
import { NewsList } from "../components/NewsList";
import { PlayList } from "../components/PlayList";
import Section from "../components/Section";
import hygraph from "../functions/hygraph";

export default async function Page() {
  const plays = await getAllDocumentsFromCollection("plays", "sortId", 10);
  const actors = await getAllDocumentsFromCollection("actors", "sortId", 10);
  const news = await hygraph.getDataByCategory("news");

  return (
    <>
      <Section title="Спектакли" link="/plays" linkText="Все спектакли">
        <PlayList plays={plays} />
      </Section>
      <Section title="Творческая группа" link="/team" linkText="Вся команда">
        <ActorList actors={actors} />
      </Section>
      <Section title="Новости" link="/news" linkText="Все новости">
        <NewsList news={news} />
      </Section>
    </>
  );
}
