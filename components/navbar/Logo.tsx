import Link from 'next/link';
import { LuTent } from 'react-icons/lu';
import { Button } from '../ui/button';
import { FaCode } from 'react-icons/fa6';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <FaCode className='w-6 h-6' />
      </Link>
    </Button>
  );
}

export default Logo;
