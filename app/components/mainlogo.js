import Image from 'next/image'
import Link from 'next/link';

export default function MainLogo() {
    return (
        <Link href = '/'>
          <Image
          src="/images/motokaa-logo.png"
          width={300}
          height={200}
          alt="Picture of the author"
        />
        </Link>
    );
  }