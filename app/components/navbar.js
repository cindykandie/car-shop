import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4">
      <nav>
        <ul className="flex gap-4 items-center justify-between p-4">
            <li>
            <Link href = '/'>
                 Home
              </Link>
            </li>
            <li> 
              <Link
              href = '/imports/cars'>
                 Car Stocks
              </Link>
              
            </li>
            <li>
              <Link
              href = '/imports/cars'>
                 How it works
              </Link>
              </li>
            <li>
            <Link
              href = '/imports/cars'>
                 FAQs
              </Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}
