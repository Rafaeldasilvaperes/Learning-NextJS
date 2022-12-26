import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticProps(context){
  const {params} = context;
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)

  const todo = await data.json()

  return {
    props: {todo}
  }
}

export async function getStaticPaths(){
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
  const data = await response.json()

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`
      }
    }
  })

  return { paths, fallback: false}
}



export default function Todo({todo}){

  return (

    <>
    <Head>
        <title>Todo: {todo.id} | NextJS</title>
        <meta name="keywords" content="Lista de tarefas"></meta>
        <meta name="description" content="Aqui está sua lista de tarefas"></meta>
    </Head>

      <section className={styles.container}>
        
        <h1>Exibindo o to-do: {todo.id}</h1>
        <span>“ {todo.title} ”</span>
        <Link href="/todos">Voltar</Link>
        {/* <p>Comentário: Opa meu bom... <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link></p>

        <p>Comentário: Óia só que doideira... <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link></p> */}
      </section>
    </>
  )
}