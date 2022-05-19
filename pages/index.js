import React from 'react';
//Components
import { PlayList } from '../components/PlayList';
import { ActorList } from '../components/ActorList';
import { SectionHeader } from '../components/SectionHeader';
import BlogCard from '../components/BlogCard';
//Redux
import { useSelector } from 'react-redux';
import {
  selectAllActors,
  selectAllPlays,
  selectAllNews,
} from '../reducers/dataSlice';
//Framer
import { motion } from 'framer-motion';
import { PageAnimation } from '../components/PageAnimation';

const Home = () => {
  // const news = useSelector(selectAllNews);

  return (
    <div>Hi</div>
    // <motion.main
    //   variants={PageAnimation}
    //   initial="hidden"
    //   animate="show"
    //   exit="exit"
    // >
    //   <section>
    //     <SectionHeader
    //       title="Спектакли"
    //       link="/plays"
    //       linkText="Все спектакли"
    //     />
    //     <PlayList />
    //   </section>
    //   <section>
    //     <SectionHeader
    //       title="Творческая группа"
    //       link="/team"
    //       linkText="Вся команда"
    //     />
    //     <ActorList />
    //   </section>
    //   <section>
    //     <SectionHeader title="Новости" link="/news" linkText="Все новости" />
    //     <div className="news_wrapper">
    //       {news.slice(0, 4).map((post) => (
    //         <BlogCard post={post} key={post.id} />
    //       ))}
    //     </div>
    //   </section>
    // </motion.main>
  );
};

export default Home;
