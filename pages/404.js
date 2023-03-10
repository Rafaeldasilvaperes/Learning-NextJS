import styles from '../styles/404/404.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function NotFound(){

  const {container404} = styles

  return (
    <>
    <Head>
        <title>404 ๐ | NextJS</title>
        <meta name="keywords" content="Lista de tarefas"></meta>
        <meta name="description" content="Aqui estรก sua lista de tarefas"></meta>
      </Head>


    <div className={container404}>
      <h1>404 | ๐</h1>
      <p>Sorry, this page does not exist!</p>
      <Link href="/" className={styles.todolist}>Voltar</Link>
    </div>
    </>
  )
}