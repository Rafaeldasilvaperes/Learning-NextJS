import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function About(){
  return (
    <>
      <Head>
          <title>Contato | NextJS</title>
          <meta name="keywords" content="Roupas, Calçados, Bonés e acessórios"></meta>
          <meta name="description" content="Fale com nós"></meta>
        </Head>
      <div className={styles.container}>
        <h1>Entre em contato com nós!</h1>
        
        
      </div>
    </>
  )
}