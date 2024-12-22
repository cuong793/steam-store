/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from '@/components/common/Avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface IProps {
  user: any;
}
function Item({ user }: IProps) {
  return (
    <Card>
      <CardContent className='p-3 pt-3 flex flex-col gap-2 w-40'>
        <Avatar
          src='https://github.com/shadcn.png'
          alt='@shadcn'
          fallback='CN'
        />
        <div>
          <Link href={'/'} className='text-base hover:underline'>
            мориц
          </Link>
          <p>
            Feedbacks: <span>796</span>
          </p>
        </div>
        <p className='flex items-center gap-1 bg-primaryCustoms p-1 rounded-md w-fit'>
          <Star size={20} className='color-primaryCustoms' />
          <span>98%</span>
        </p>
      </CardContent>
    </Card>
  );
}

export default Item;
