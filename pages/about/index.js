import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function About(){
  return (
    <>
      <Head>
          <title>Sobre nós | NextJS</title>
          <meta name="keywords" content="Roupas, Calçados, Bonés e acessórios"></meta>
          <meta name="description" content="Encontre a melhor roupa para você"></meta>
        </Head>
      <div className={styles.container}>
        <h1>Página de Sobre Nós</h1>
        
        
      </div>
    </>
  )
}