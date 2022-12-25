import '../styles/globals.css'
import MainContainer from '../components/MainContainer/MainContainer.js'

function MyApp({ Component, pageProps }) {

  return (
    <MainContainer >
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
