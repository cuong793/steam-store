/* eslint-disable @next/next/no-img-element */
import Tooltip from '@/components/common/Tooltip';
import { ICategory } from '@/variables/interface';
import React from 'react';

interface IProps {
  category: ICategory;
}

function Item({ category }: IProps) {
  return (
    <Tooltip content={category?.category_title}>
      <div className='flex  items-center justify-center w-14 h-14  rounded-md bg-secondaryCustoms hover:shadow-lg hover:-translate-y-2 ease-out duration-300'>
        <img
          className='w-8 h-8 object-cover'
          src={`${category?.category_name}.svg`}
          alt={category?.category_title}
        />
      </div>
    </Tooltip>
  );
}

export default Item;
