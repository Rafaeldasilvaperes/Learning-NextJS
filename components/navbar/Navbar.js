import Link from 'next/link'
import Image from 'next/image'

import styles from './Navbar.module.css'

export default function Navbar(){

  const {navbar, logoContainer} = styles

  return (
    <>
      <nav>
        
        <ul className={navbar}>
          <li>
            <Link href="/">
              <div className={logoContainer}>
              <Image src='/images/pokeball.png' width="30" height="30" alt="Poke Next" ></Image>
              <h1>Poke Next</h1>
              </div>
          </Link>

          </li>
          
          <li>
            <Link href="/todos">
              To-do List
            </Link>
          </li>
          <li>
            <Link href="/about">
              Sobre nós
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

