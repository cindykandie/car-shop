import Image from 'next/image'
import AskButton from './askBtn';

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mx-10 md:flex-row md:flex-row md:justify-center md:items-center">
      <Image
        src="/images/talk-to-us.png"
        width={400}
        height={400}
        alt="Picture of the communications"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">
            Ask A Question
        </h1>
        <h3>
        Our car import experts are avaiable to answer you.
        </h3>
        <AskButton />
      </div>
    </div>
  );
}
