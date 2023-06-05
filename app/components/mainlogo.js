import Image from 'next/image'

export default function MainLogo() {
    return (
        <Image
          src="/images/motokaa-logo.png"
          width={300}
          height={200}
          alt="Picture of the author"
        />
    );
  }