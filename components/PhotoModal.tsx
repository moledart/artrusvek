import React from 'react';
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface Props {
  clickedPhoto: string;
  setClickedPhoto: React.Dispatch<React.SetStateAction<string>>;
  isFullScreen: boolean;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PhotoModal = (props: Props) => {
  const { clickedPhoto, setClickedPhoto, isFullScreen, setFullScreen } = props;

  isFullScreen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '');

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
          <div className="w-[90%] relative">
            <div className="p-4 z-20 absolute right-0 top-[-64px] cursor-pointer flex items-center gap-4">
              <FontAwesomeIcon
                icon={faXmark}
                size="2x"
                className="close_modal"
              />
              <span>Закрыть</span>
            </div>
            <Image
              src={clickedPhoto}
              alt="Фото спектакля"
              layout="responsive"
              width={1}
              height={1}
              objectFit="contain"
              objectPosition="top center"
              className="z-30"
            />
          </div>
        </div>
      )}
    </>
  );
};
