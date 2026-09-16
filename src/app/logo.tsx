
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn('flex items-center', className)}>
        <Image src="/logo/lo.png" alt="ITLC INDIA PVT LTD Logo" width={32} height={32} />
    </div>
  );
};

export default Logo;
