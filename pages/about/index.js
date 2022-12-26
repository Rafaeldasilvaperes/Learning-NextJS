import stylesPage from '../../styles/AboutUs/AboutUs.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function About(){

  const {containerSobreNos__texto, containerSobreNos} = stylesPage

  return (
    <>
      <Head>
          <title>Sobre nós | NextJS</title>
          <meta name="keywords" content="Roupas, Calçados, Bonés e acessórios"></meta>
          <meta name="description" content="Encontre a melhor roupa para você"></meta>
        </Head>
      <div className={containerSobreNos}>
        <div className={containerSobreNos__texto}>
          <h1>Sobre Nós</h1>
          <p>Poke Next é uma aplicação front-end usada para fins de estudo. É uma aplicação simples onde utilizo o NextJS para fazer a geração de páginas dinâmicas e para fazer a gestão dos dados que consumo de uma API gratuíta chamada PokeAPI.</p>
        </div>
        <Image src="/images/charizard.png" width="500" height="500"></Image>
        
      </div>
    </>
  )
}