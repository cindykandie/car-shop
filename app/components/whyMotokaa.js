import Image from 'next/image';
import whymotokaaData from '../data/whymotokaa.json';

export default function WhyMotokaaSection() {
  return (
    <div className="flex flex-col gap-8 mt-8 md:flex-row md:justify-center">
      {whymotokaaData.map((section) => (
        <div key={section.heading} className="flex flex-col items-center gap-4">
          <div className="relative flex">
            <Image
              src={section.image}
              width={400}
              height={600}
              alt={section.heading}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-xl font-bold">{section.heading}</h4>
                <p>{section.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
