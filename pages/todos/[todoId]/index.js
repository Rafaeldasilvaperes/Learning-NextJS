import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from "next/router";

export default function Todo(){

  const router = useRouter()

  const todoId = router.query.todoId

  return (

    <>
    <Head>
        <title>{todoId} | NextJS</title>
        <meta name="keywords" content="Lista de tarefas"></meta>
        <meta name="description" content="Aqui está sua lista de tarefas"></meta>
      </Head>

      <Link href="/">Voltar</Link>
      <h1>Exibindo o to-do: {todoId}</h1>
      <p>Comentário: la la la... <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>

      <p>Comentário: Opa meu bom... <Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link></p>

      <p>Comentário: Óia só que doideira... <Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link></p>
    </>
  )
}