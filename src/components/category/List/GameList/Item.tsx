import { IGame } from '@/variables/interface';
import React from 'react';

interface IProp {
  game: IGame;
}
function Item({ game }: IProp) {
  return (
    <div className='group flex-shrink-0 w-fit p-2 px-2 bg-secondaryCustoms rounded-md cursor-pointer'>
      <p className='group-hover:-translate-y-0.5  group-hover:shadow-md group-hover:text-white/80 duration-300'>
        {game?.title}
      </p>
    </div>
  );
}

export default Item;
