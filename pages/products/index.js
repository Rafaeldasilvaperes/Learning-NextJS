import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function Products(){
  return (
    <>
      <Head>
        <title>Produtos | NextJS</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>
      <div className={styles.container}>
        <h1>Página de Produtos</h1>
        
      
      </div>
    </>
  )
}