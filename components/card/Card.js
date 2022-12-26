import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({pokemon}){

  const {article} = styles

  return (
    <article className={article}>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width="140" height="140" alt="Pokemon"></Image>

      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </article>

  )

}