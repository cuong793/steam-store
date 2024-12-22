import CategoryNavbar from '@/components/category/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { IoChatbubbleSharp } from 'react-icons/io5';
import { MdOutlineNavigateBefore } from 'react-icons/md';


function HeaderLg() {
  return (
    <div className='hidden lg:block'>
      <div className='flex align-center justify-between px-[16vw] py-1 margin-x-auto mx-auto'>
        <div />
        <div className='flex align-center gap-2'>
          <span className='transform translate-y-0.5'>
            <IoChatbubbleSharp />
          </span>
          <div className='text-[13px] font-light'>24/7 support</div>
        </div>
        <div></div>
      </div>
      <div className='flex justify-between items-center h-11 pl-[10vw] pr-[16vw] bg-secondaryCustoms'>
        <div className='flex items-center gap-2'>
          <Button size={'sm'} variant='secondary'>
            <p className='flex items-center gap-1'>
              <span>
                <MdOutlineNavigateBefore />
              </span>
              <span>To the forum</span>
            </p>
          </Button>
          <Image src='logo.svg' alt='logo' width={120} height={120} />
          <CategoryNavbar />
        </div>
        <div className='flex items-center gap-2'>
          <Input size={28} placeholder='Search...' />
          <Button size={'sm'}>Login</Button>
          <Button size={'sm'} variant='link'>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderLg;
