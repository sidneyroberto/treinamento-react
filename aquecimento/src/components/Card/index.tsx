import styles from './styles.module.css'

const Card = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá!</h1>
      <p className={styles.slogan}>Aquecimento com React</p>
    </div>
  )
}

export default Card
