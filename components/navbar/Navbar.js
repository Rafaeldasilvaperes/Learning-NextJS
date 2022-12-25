import Link from 'next/link'
import Image from 'next/image'

import styles from './Navbar.module.css'

export default function Navbar(){

  const {navbar} = styles

  return (
    <>
      <nav>
        
        <ul className={navbar}>
          <li>
            <Link href="/">
              <Image src='/images/pokeball.png' width="30" height="30" alt="Poke Next" ></Image>
          </Link>
          </li>
          
          <li>
            <Link href="/todos">
              To-do List
            </Link>
          </li>
          <li>
            <Link href="/register">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

