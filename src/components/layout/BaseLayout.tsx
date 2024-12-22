import React from 'react';
import Header from '../common/Header';

interface IProps {
  children: React.ReactNode;
}
function BaseLayout({ children }: IProps) {
  return (
    <div className='fixed inset-0 w-screen min-h-screen text-[13px] bg-primaryCustoms text-primaryCustoms overflow-y-auto'>
      <Header />
      <div className='max-w-full lg:max-w-[1076px] mx-auto p-4'>{children}</div>
    </div>
  );
}

export default BaseLayout;
