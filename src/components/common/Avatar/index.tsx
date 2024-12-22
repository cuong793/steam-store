import {
  Avatar as AvatarProvider,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar';

interface IProps {
  src: string;
  alt: string;
  fallback: string;
}

function Avatar({ src, alt, fallback }: IProps) {
  return (
    <AvatarProvider>
      <AvatarImage
        src={src || 'https://github.com/shadcn.png'}
        alt={alt || '@shadcn'}
      />
      <AvatarFallback>{fallback || 'CN'}</AvatarFallback>
    </AvatarProvider>
  );
}
export default Avatar;
