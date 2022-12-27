import Head from 'next/head'
import Image from 'next/image'
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
  const maxPokemons = 905
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
  const {container, pokemonContainer, typesContainer, dataContainer, dataHeight, dataWeight, title} = styles

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
     <div className={pokemonContainer}>
      <h1 className={title}>{nameCapitalized}</h1>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width="160" height="160" alt="Pokemon"></Image>
     </div>

     <div>
      <h3>Número:</h3>
      <p>#{pokemon.id}</p>
     </div>

     <div>
      <h3>Tipo:</h3>

      <div className={typesContainer}>
        {pokemon.types.map((item, index) => (
          <span key={index} className={`${styles.type} ${styles['type_'+item.type.name]}`}>{item.type.name}</span>
        ))}
      </div>

     </div>

     <div className={dataContainer}>
      <div className={dataHeight}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
      </div>
      <div className={dataWeight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
      </div>
     </div>
     
    </section>
    
    </>
  )
}