import Link from 'next/link'
import Head from 'next/head'

import Card from '../../components/card/Card.js';

import styles from '../../styles/PokemonPage/PokemonPage.module.css'


// GET ONE by query params to bring one from all those pages already made
export async function getStaticProps(context){
  const {params} = context;
  const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
  const pokemon = await api.json()

  return {
    props: {
      pokemon
    }
  }
}

// GET ALL to make them paths
export async function getStaticPaths(){
  const maxPokemons = 251
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
  const data = await response.json()

  // adding IDs to each pokemon 'cos the api won't have them ids already
  const paths = data.results.map((pokemon, index) => {
    pokemon.id = index + 1

    return {
      params: {
        pokemonId: `${pokemon.id}`
      }
    }
  })
  return { paths, fallback: false}
}

export default function Pokemon({ pokemon }){

  // Styles
  const {container} = styles

  const pokemonName = pokemon.name
  const nameCapitalized = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

  return (
    <>
      <Head>
        <title>{nameCapitalized} | NextJS</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>

    <section className={container}>
     <div>

        <Card key={pokemon.id} pokemon={pokemon} />
        
      </div>

      <Link href="/">Voltar</Link>
    </section>
    
    </>
  )
}