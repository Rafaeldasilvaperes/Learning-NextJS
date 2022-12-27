import styles from './Footer.module.css'

export default function Footer(){
  
  const {footer} = styles

  return (
    <footer className={footer}>
      <p>Rafael Peres &copy; 2022</p>
    </footer>
  )
}