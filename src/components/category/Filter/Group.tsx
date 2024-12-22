/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Item from './Item';
import { IParams } from '@/variables/interface';

interface IProps {
  subItem: {
    param: IParams;
    attribute: any;
  };
  mainItem: {
    param: IParams;
    attribute: any;
  };
  label: string;
}
export const GroupInput = ({ subItem, mainItem, label }: IProps) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      {label && <p className='text-primaryCustoms font-bold'>{label}</p>}
      <div className='flex items-center gap-2 w-full'>
        <div className='w-2/5'>
          <Item
            params={subItem?.param}
            {...subItem?.attribute}
            className='bg-secondaryCustoms'
          />
        </div>
        <div className='w-3/5'>
          <Item
            params={mainItem?.param}
            {...mainItem?.attribute}
            className='bg-secondaryCustoms'
          />
        </div>
      </div>
    </div>
  );
};
