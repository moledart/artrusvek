import { GetServerSideProps } from 'next';
import React from 'react';
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
    <section className="">
      <h2 className="text-3xl font-bold leading-8 mb-8">Спектакли</h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8">
        {renderedPlays}
      </div>
    </section>
  );
};

export default Plays;

export const getServerSideProps: GetServerSideProps = async () => {
  const plays = await getAllDocumentsFromCollection('plays', 'sortId', 10);

  return {
    props: { plays },
  };
};
