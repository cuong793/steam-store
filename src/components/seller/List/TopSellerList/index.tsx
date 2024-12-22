/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Item from './Item';

function TopSellerList() {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-lg font-normal text-secondaryCustoms'>
        Top sellers last 90 days — Steam
      </h3>
      <div className='flex gap-4 overflow-y-auto max-w-[calc(1076px - 240px)]'>
        {[1, 2, 3, 4, 5].map((user: any, index) => (
          <Item key={user?.user_id || index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default TopSellerList;
