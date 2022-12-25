import Navbar from '../navbar/Navbar.js'
import Footer from '../footer/Footer.js'
import Head from 'next/head'

import styles from './MainContainer.module.css'

export default function MainContainer({ children }) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"/>
      </Head>

    <section className={styles.main}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </section>
    </>
  )
}