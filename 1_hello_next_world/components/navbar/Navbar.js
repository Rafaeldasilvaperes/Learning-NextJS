import Link from 'next/link'

import styles from './Navbar.module.css'

export default function Navbar(){

  const {navbar} = styles

  return (
    <>
      <ul className={navbar}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products">
            Produtos
          </Link>
        </li>
        <li>
          <Link href="/about">
            Sobre nós
          </Link>
        </li>
        <li>
          <Link href="/">
            Sign in
          </Link>
        </li>
      </ul>
    </>
  )
}

