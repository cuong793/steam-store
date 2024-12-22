import Tooltip from '@/components/common/Tooltip';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { X } from 'lucide-react';
import Link from 'next/link';

function NotLoggedNotification() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 text-base'>
          <p className='font-semibold'>Registration</p>
          <Tooltip content='Close'>
            <X size={18} />
          </Tooltip>
        </CardTitle>
        <CardDescription className='flex gap-1 text-secondaryCustoms mb-4'>
          <p>
            To gain access to all sections of the forum and valuable information
            -{' '}
          </p>
          <Link href='/auth/login' className='font-semibold hover:underline'>
            register at this link
          </Link>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default NotLoggedNotification;
