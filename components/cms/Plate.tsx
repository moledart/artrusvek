import React from 'react';
import Image from 'next/image';

interface PlateProps {
  active?: boolean | undefined;
}

const Plate = ({ active }: PlateProps) => {
  return (
    <li className={`flex gap-3 ${active && 'bg-zinc-800'}`}>
      <div className="shrink-0 h-[50px]">
        <Image
          src="https://i.pinimg.com/564x/d2/e6/42/d2e6425c40a6369e2e4773776d7e2f4d.jpg"
          width={50}
          height={50}
          objectFit="cover"
        />
      </div>
      <p className="line-clamp-2 max-h-[50px]">
        Благовещенцам показали спектакль на злобу дня «Зигзаг удачи» показали
        спектакль на злобу дня «Зигзаг удачи» Благовещенцам показали спектакль
        на злобу дня «Зигзаг удачи»
      </p>
    </li>
  );
};

export default Plate;
