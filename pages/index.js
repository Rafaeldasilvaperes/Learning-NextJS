import styles from '../styles/HomePage/HomePage.module.css'

import Head from 'next/head'
import Image from 'next/image'

import Card from '../components/card/Card.js'


export async function getStaticProps(){

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const response = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await response.json()

  // add pokemon index
  data.results.map((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({pokemons}) {
  // styles
  const {container, headerContainer, title, cardsContainer} = styles

  return (
    <>
    <Head>
      <title>PokeNext Home | NextJS</title>
      <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
      <meta name="description" content="Encontre a melhor roupa para você"></meta>
    </Head>

    <section className={container}>
      <div className={headerContainer}>
        <h1 className={title}>Poke Next</h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='Poke Next Logo'></Image>
      </div>
      <div>
        <ul className={cardsContainer}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      </div>
      
    </section>
    </>
  )
}
