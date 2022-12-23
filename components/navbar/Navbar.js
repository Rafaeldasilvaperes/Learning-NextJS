import Link from 'next/link'

import styles from './Navbar.module.css'

export default function Navbar(){

  const {navbar} = styles

  return (
    <>
      <nav>
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
            <Link href="/contato">
              Contato
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

