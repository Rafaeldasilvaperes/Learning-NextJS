import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function NotFound(){

  return (
    <>
    <Head>
        <title>404 😕 | NextJS</title>
        <meta name="keywords" content="Lista de tarefas"></meta>
        <meta name="description" content="Aqui está sua lista de tarefas"></meta>
      </Head>


    <div className={styles.container}>
      <h1>404</h1>
      <p>This page doesn't exist!</p>
      <Link href="/" className={styles.todolist}>Voltar</Link>
    </div>
    </>
  )
}