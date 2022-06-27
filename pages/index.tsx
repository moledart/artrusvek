import React from 'react';
//Components
import { PlayList } from '../components/PlayList';
import { ActorList } from '../components/ActorList';
import { NewsList } from '../components/NewsList';

import {
  getDataFromFirebase,
  getAllDocumentsFromCollection,
} from '../components/firebase';
import { GetServerSideProps } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import Section from '../components/Section';
import NewsPost from '../components/NewsPost';

import { ActorType, NewsPostType, PlayType } from '../types/categories';

interface Props {
  actors: ActorType[];
  news: NewsPostType[];
  plays: PlayType[];
}

const Home = ({ actors, news, plays }: Props) => {
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
};

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await getAllDocumentsFromCollection('news', 'published', 10);
  const actors = await getAllDocumentsFromCollection('actors', 'sortId', 10);
  const plays = await getAllDocumentsFromCollection('plays', 'sortId', 10);
  return { props: { actors, news, plays } };
};

export default Home;
