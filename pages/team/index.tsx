import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Actor from '../../components/Actor';
import { getAllDocumentsFromCollection } from '../../components/firebase';
import { ActorType } from '../../types/categories';

interface Props {
  actors: ActorType[];
}

const Actors = ({ actors }: Props) => {
  const producers = actors.filter((actor) => actor.role === 'продюсер');
  const directors = actors.filter((actor) => actor.role === 'режиссер');
  const crew = actors.filter((actor) => actor.role === 'актер');
  const composers = actors.filter((actor) => actor.role === 'композитор');
  const authors = actors.filter((actor) => actor.role === 'автор');
  const arrangers = actors.filter((actor) => actor.role === 'аранжировщик');

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
        <h2 className="text-3xl font-bold leading-8 mb-8">Творческая группа</h2>
        <div className="flex flex-wrap gap-x-12 gap-y-12">
          <div className="actor_group">
            <div className="group_name">
              <span className="category">Продюсеры</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {producers.length &&
                producers.map((actor) => (
                  <Actor actor={actor} key={actor.id} />
                ))}
            </div>
          </div>
          <div className="actor_group">
            <div className="group_name">
              <span className="category">Режиссеры</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {directors.length &&
                directors.map((actor) => (
                  <Actor actor={actor} key={actor.id} />
                ))}
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
                composers.map((actor) => (
                  <Actor actor={actor} key={actor.id} />
                ))}
            </div>
          </div>
          <div className="actor_group">
            <div className="group_name">
              <span className="category">Аранжировщики</span>
              <div className="line"></div>
            </div>
            <div className="actors_expand">
              {arrangers.length &&
                arrangers.map((actor) => (
                  <Actor actor={actor} key={actor.id} />
                ))}
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
    </>
  );
};

export default Actors;

export const getServerSideProps = async () => {
  const actors = await getAllDocumentsFromCollection('actors', 'sortId', 999);

  return {
    props: {
      actors,
    },
  };
};
