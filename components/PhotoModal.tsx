import React from 'react';
//Font awesome
import Image from 'next/image';

interface Props {
  clickedPhoto: string;
  setClickedPhoto: React.Dispatch<React.SetStateAction<string>>;
  isFullScreen: boolean;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PhotoModal = (props: Props) => {
  const { clickedPhoto, setClickedPhoto, isFullScreen, setFullScreen } = props;

  if (typeof window !== 'undefined') {
    isFullScreen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }

  const exitPhotoModal = () => {
    setFullScreen(false);
    setClickedPhoto('');
  };

  return (
    <>
      {isFullScreen && (
        <div
          className="w-full h-screen overflow-y-hidden bg-[rgba(0,_0,_0,_0.74)] fixed top-0 left-0 z-10 flex items-center justify-center"
          onClick={exitPhotoModal}
        >
          <div className="w-[90%] h-[90%] relative ">
            <div className="p-3 bg-zinc-100 text-zinc-900 absolute top-4 right-4 rounded-lg cursor-pointer z-40">
              Закрыть
            </div>
            <Image
              src={clickedPhoto}
              alt="Фото спектакля"
              layout="responsive"
              width={2}
              height={1}
              objectFit="contain"
              objectPosition="center center"
              className="z-30"
            />
          </div>
        </div>
      )}
    </>
  );
};
