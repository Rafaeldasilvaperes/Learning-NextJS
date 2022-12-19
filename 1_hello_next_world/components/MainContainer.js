import Navbar from './navbar/Navbar.js'
import Footer from './footer/Footer.js'

import styles from './MainContainer.module.css'

export default function MainContainer({children}){
  
  return (
    <section className={styles.main}>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </section>
  )
}