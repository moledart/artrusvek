import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getAllDocumentsFromCollection } from '../../components/firebase';
import NewsPost from '../../components/NewsPost';
import { NewsPostType } from '../../types/categories';

interface Props {
  news: NewsPostType[];
}

const News = ({ news }: Props) => {
  const renderedNews = news.map((post) => (
    <NewsPost post={post} key={post.id} />
  ));
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
        <h2 className="text-3xl font-bold leading-8 mb-8">Новости</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(286px,_1fr))] gap-8">
          {renderedNews}
        </div>
      </section>
    </>
  );
};

export default News;

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await getAllDocumentsFromCollection('news', 'published', 999);

  return {
    props: { news },
  };
};
