import Image from 'next/image'
import AskButton from './askBtn';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mx-10 md:flex-row md:flex-row-reverse md:justify-center md:items-center">
      <Image
        src="/images/hero.jpg"
        width={400}
        height={400}
        alt="Picture of the author"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">
          Any Car You Want. <br/>
          Imported For You.<br/>
          100% Hassle Free.
        </h1>
        <p>
          With more than 18 years' experience in the direct car import business, we know everything it takes to source the best cars, process paperwork, and deliver quality clean cars from anywhere. Ready to get started?
        </p>
          <div className='flex align-center justify-start gap-4'>
          <button className="border border-transparent bg-blue-500 text-white px-4 py-2 rounded-lg">
            See Available Stocks (112,272)
          </button>
          <AskButton />
        </div>
        
      </div>
    </div>
  );
}
