import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps(){
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')

  const todos  = await data.json()
 
  return {
    props: {
      todos
    }
  }
}

export default function Todos({ todos }){

  const {todolist} = styles

  return (
    <>
      <Head>
        <title>To-do List | NextJS</title>
        <meta name="keywords" content="Lista de tarefas"></meta>
        <meta name="description" content="Aqui está sua lista de tarefas"></meta>
      </Head>

      <div className={styles.container}>
          <h1>Tarefas para fazer:</h1>
          <ul className={todolist}>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}
              
              <Link href={`/todos/${todo.id}`}> - Detalhes</Link>
              
              </li>
              
            ))}
          </ul>
      </div>
    </>
  )

}