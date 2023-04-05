import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getAllDocumentsFromCollection } from '../../components/firebase';

//Components
import Play from '../../components/Play';
import { PlayType } from '../../types/categories';

interface Props {
  plays: PlayType[];
}

const Plays = ({ plays }: Props) => {
  const renderedPlays = plays.map((play) => <Play play={play} key={play.id} />);
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
      <section>
        <h2 className="text-3xl font-bold leading-8 mb-8">Спектакли</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8">
          {renderedPlays}
        </div>
      </section>
    </>
  );
};

export default Plays;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=300, stale-while-revalidate=59'
  );
  const plays = await getAllDocumentsFromCollection('plays', 'sortId', 10);

  return {
    props: { plays },
  };
};
