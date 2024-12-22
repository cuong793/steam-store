import React from 'react';

function Banner() {
  return (
    <div className='w-full h-full lg:h-[240px] relative rounded-lg overflow-hidden'>
      <video
        className='w-full h-full'
        autoPlay
        loop
        src='/1.webm'
        muted
      ></video>
    </div>
  );
}

export default Banner;
