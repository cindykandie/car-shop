import Image from 'next/image';
import carLogos from '../data/carLogos.json';

export default function CarMakeSection() {
  return (
    <div className='flex flex-col gap-5 mt-8'>
      <h3 className='text-2xl font-bold mb-4'>Browse Popular Makes</h3>

      <div className='flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-none md:flex md:gap-10'>
        {carLogos.map((car) => (
          <div key={car.make}>
            <Image
              src={car.logo}
              width={100}
              height={70}
              alt={`${car.make} Logo`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
