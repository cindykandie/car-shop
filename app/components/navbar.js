import Image from 'next/image'

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4">
      <nav>
        <ul className="flex gap-4 items-center justify-between p-4">
            <li>Home</li>
            <li>Car Stocks</li>
            <li>How it works</li>
            <li>FAQs</li>
        </ul>
      </nav>
    </div>
  )
}
