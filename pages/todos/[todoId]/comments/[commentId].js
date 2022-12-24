import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from "next/router";

export default function Comment(){

  const router = useRouter()
  const todoId = router.query.todoId
  const commentId = router.query.commentId

  return (
    <>
    <Head>
        <title>{todoId}: {commentId} | NextJS</title>
        <meta name="keywords" content="Lista de tarefas"></meta>
        <meta name="description" content="Aqui está sua lista de tarefas"></meta>
      </Head>


      <Link href={`/todos/${todoId}`}>Voltar</Link>
      <h1>Exibindo o comentário número: {commentId}</h1>
      <h2>Estamos dentro da sessão comentários do To-do: {todoId}!</h2>
    </>
  )
}