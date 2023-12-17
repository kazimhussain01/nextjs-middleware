import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='text-center text-6xl py-5 font-sans font-bold'>MiddleWare Concept</h1>
      <div className="ml-10 text-xl space-y-2 text-blue-500 underline">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/collage">Collage</Link>
        </li>
        <li>
          <Link href="/study">Study</Link>
        </li>
        <li>
          <Link href="/student">Student</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </div>
    </div>
  )
}
