import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={'/images/iviLogo.svg'} alt="logo" width={66} height={48} />
    </Link>
  );
};
