/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Item from './Item';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';
import Pagination from '@/components/common/Pagination';

const SellOfList = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2 flex-col lg:flex-row justify-between lg:items-center'>
        <div className='flex items-center gap-2 w-fit'>
          <div className='w-8 h-8 bg-secondaryCustoms rounded-md flex items-center justify-center'>
            <img
              className='w-5 h-5 object-cover bg-secondaryCustoms'
              src={`steam.svg`}
              alt={'logo'}
            />
          </div>
          <h3 className='text-lg font-normal text-secondaryCustoms'>
            Top sellers last 90 days — Steam
          </h3>
        </div>
        <div className='flex items-center gap-2'>
          <Button size={'sm'} variant='destructive' className='w-8 h-8'>
            <RotateCw size={20} />
          </Button>
          <Pagination />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {[1, 2, 3, 4, 5].map((account: any, index) => (
          <Item key={account?.account_id || index} account={account} />
        ))}
      </div>
    </div>
  );
};

export default SellOfList;
