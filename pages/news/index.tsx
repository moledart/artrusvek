import { GetServerSideProps } from 'next';
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
    <main className="news">
      <section>
        <h2 className="text-3xl font-bold leading-8 mb-8">Новости</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(286px,_1fr))] gap-8">
          {renderedNews}
        </div>
      </section>
    </main>
  );
};

export default News;

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await getAllDocumentsFromCollection('news', 'published', 999);

  return {
    props: { news },
  };
};
