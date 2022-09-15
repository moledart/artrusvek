//Components
import { ActorList } from '../components/ActorList';
import { NewsList } from '../components/NewsList';
import { PlayList } from '../components/PlayList';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getAllDocumentsFromCollection } from '../components/firebase';
import Section from '../components/Section';
import { ActorType, NewsPostType, PlayType } from '../types/categories';

interface Props {
  actors: ActorType[];
  news: NewsPostType[];
  plays: PlayType[];
}

const Home = ({ actors, news, plays }: Props) => {
  return (
    <>
      <Head>
        <title>Продюсерская компания ArtRusVek</title>
        <meta
          name="description"
          content='Добро пожаловать в продюсерский центр ArtRusVek. Спектакли "Идеальный свидетель", "Главная Роль", "Зигзаг Удачи", "Левша", "Колесо Фортуны".'
        />

        <meta property="og:url" content="https://www.artrusvek.ru/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Продюсерская компания ArtRusVek" />
        <meta
          property="og:description"
          content='Добро пожаловать в продюсерский центр ArtRusVek. Спектакли "Идеальный свидетель", "Главная Роль", "Зигзаг Удачи", "Левша", "Колесо Фортуны".'
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/artrusvek.appspot.com/o/image%2Fplays%2Fglavnaya-rol%2Fthumbnail.jpg?alt=media&token=d3ab5c87-8ea1-4160-b96a-fb03a1e71b4d"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="artrusvek.ru" />
        <meta property="twitter:url" content="https://www.artrusvek.ru/" />
        <meta name="twitter:title" content="Продюсерская компания ArtRusVek" />
        <meta
          name="twitter:description"
          content='Добро пожаловать в продюсерский центр ArtRusVek. Спектакли "Идеальный свидетель", "Главная Роль", "Зигзаг Удачи", "Левша", "Колесо Фортуны".'
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/artrusvek.appspot.com/o/image%2Fplays%2Fglavnaya-rol%2Fthumbnail.jpg?alt=media&token=d3ab5c87-8ea1-4160-b96a-fb03a1e71b4d"
        />
      </Head>
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
};

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await getAllDocumentsFromCollection('news', 'published', 10);
  const actors = await getAllDocumentsFromCollection('actors', 'sortId', 10);
  const plays = await getAllDocumentsFromCollection('plays', 'sortId', 10);
  return { props: { actors, news, plays } };
};

export default Home;
