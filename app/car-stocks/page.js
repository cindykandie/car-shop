import Image from 'next/image'

export default function CarStocks() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <Image
      src="/images/motokaa-logo.png"
      width={300}
      height={200}
      alt="Picture of the author"
    />
    </main>
  )
}
