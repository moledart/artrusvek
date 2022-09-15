import React from 'react';
import Image from 'next/image';
import { NewsPostType, TCategoryElement } from '../../types/categories';

interface PlateProps {
  el: TCategoryElement;
  currentElement: TCategoryElement;
  setCurrentElement: React.Dispatch<React.SetStateAction<TCategoryElement>>;
  setBlankForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Plate = ({ el, currentElement, setCurrentElement, setBlankForm }: PlateProps) => {
  const handleClick = () => {
    setCurrentElement(el);
    setBlankForm(false);
  }

  return (
    <li
      className={`flex gap-3 ${currentElement === el && 'bg-zinc-800'}`}
      onClick={handleClick}
    >
      <div className="shrink-0 h-[50px]">
        <Image src={el.thumbnail} width={50} height={50} objectFit="cover" />
      </div>
      <p className="line-clamp-2 max-h-[50px]">{el.name}</p>
    </li>
  );
};

export default Plate;

// ${active && 'bg-zinc-800'}
