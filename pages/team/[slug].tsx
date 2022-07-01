import React from 'react';
//Components
import SocialLinks from '../../components/SocialLinks';
import {
  getDocumentFromCollection,
  getDocumentsContainingSlug,
} from '../../components/firebase';
import { ActorType, PlayType } from '../../types/categories';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

interface Props {
  actor: ActorType;
  involvedInPlays: PlayType[];
}

const ActorDetail = ({ actor, involvedInPlays }: Props) => {
  const { photo, name, role, birthday, education, description, socials } =
    actor;

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
      <div className="max-w-4xl lg:mx-auto py-8 lg:py-0">
        <header className="flex gap-8 flex-col md:flex-row">
          <div className="flex-1 md:w-[40%]">
            <Image
              src={photo}
              alt={name}
              layout="responsive"
              width={5}
              height={6}
              objectFit="cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl lg:text-3xl text-neutral-200 font-bold leading-8">
              {name}
            </h2>
            <span className="block text-base text-neutral-400">{role}</span>
            <span className="param">Дата рождения</span>
            <p className="param-text">{birthday}</p>
            <span className="param">Образование</span>
            <p className="param-text">{education}</p>
            <SocialLinks socials={socials} />
            {involvedInPlays.length ? (
              <>
                <span className="param">Спектакли</span>
                <div className="flex gap-2">
                  {involvedInPlays.map((play) => (
                    <Link href={`/plays/${play.slug}`} key={play.id}>
                      <a className="uppercase flex items-center px-2 bg-zinc-700 rounded-sm hover:bg-mainDark basic-animation text-xs h-8 whitespace-nowrap mt-2">
                        {play.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </header>
        {description && (
          <>
            <span className="param">Описание</span>
            {/* <p>{description}</p> */}
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="param-text"
            ></div>
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
  const involvedInPlays = await getDocumentsContainingSlug(
    'plays',
    'actors',
    slug,
    'sortId'
  );

  return {
    props: {
      actor,
      involvedInPlays,
    },
  };
};
