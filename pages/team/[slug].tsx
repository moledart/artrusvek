import React, { useEffect, useState } from 'react';
//Components
import SocialLinks from '../../components/SocialLinks';
import { getDocumentFromCollection } from '../../components/firebase';
import { ActorType } from '../../types/categories';
import { GetServerSideProps } from 'next';

interface Props {
  actor: ActorType;
}

const ActorDetail = ({ actor }: Props) => {
  const { photo, name, role, birthday, education, playedIn, description } =
    actor;
  // //Getting data from the store
  // const actor = useSelector((state) => selectActorBySlug(state, pathId));
  // const involvedPlays = useSelector((state) => {
  //   const allPlays = selectAllPlays(state);
  //   return allPlays.filter((play) => play.slug === actor.playedIn);
  // });
  // const canLoad = actor && involvedPlays;

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.scrollTo(0, 0);
  //   }
  // }, []);

  return (
    <>
      <div className="actor_detail">
        <div className="actor_bio">
          <div className="photo">
            <img src={photo} alt={name} loading="lazy" />
          </div>
          <div className="info">
            <h2>{name}</h2>
            <span>{role}</span>
            <span className="param">Дата рождения</span>
            <p className="param_value">{birthday}</p>
            <span className="param">Образование</span>
            <p className="param_value">{education}</p>
            {/* <SocialLinks actor={actor} />
            {involvedPlays.length ? (
              <>
                <span className="param">Спектакли</span>
                <div className="plays_involved">
                  {involvedPlays.map((play) => (
                    <Link
                      to={`/plays/${play.slug}`}
                      className="play"
                      key={play.id}
                    >
                      {play.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              ''
            )} */}
          </div>
        </div>
        {description && (
          <>
            <span className="param">Описание</span>
            {/* <p>{description}</p> */}
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </>
        )}
      </div>
    </>
  );
};

export default ActorDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  const actor = await getDocumentFromCollection('actors', slug);

  return {
    props: {
      actor,
    },
  };
};
