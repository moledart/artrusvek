import React from 'react';
import Image from 'next/image';
import { NewsPost } from '../../types/categories';

interface PlateProps {
  el: NewsPost;
  currentElement: {};
  setCurrentElement: React.Dispatch<React.SetStateAction<{}>>;
}

const Plate = ({ el, currentElement, setCurrentElement }: PlateProps) => {
  return (
    <li
      className={`flex gap-3 ${currentElement === el && 'bg-zinc-800'}`}
      onClick={() => setCurrentElement(el)}
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
