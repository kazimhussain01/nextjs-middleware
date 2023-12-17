import Link from "next/link";
import Image from "next/image";

export default function About(){
    return(
        <div>
          <h1 className='text-center text-6xl py-5 font-sans font-bold'>About Us Page</h1>
        <div className="ml-10 text-xl space-y-2 text-blue-500 underline">
          <li>
            <Link href="/about/setting">Setting</Link>
          </li>
          <li>
            <Link href="/about/password">Password</Link>
          </li>
        </div>
        </div>
    )
}