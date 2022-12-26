import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
      <title>PokeNext Home | NextJS</title>
      <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
      <meta name="description" content="Encontre a melhor roupa para você"></meta>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Hello Next World!</h1>
      <Image src="/images/city.jpg" width="400" height="500" alt="City"/>
      
    </div>
    </>
  )
}
