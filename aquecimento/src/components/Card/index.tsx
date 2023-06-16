import styles from './styles.module.css'

type Props = {
  title: string
  slogan: string
}

const Card = ({ slogan, title }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.slogan}>{slogan}</p>
    </div>
  )
}

export default Card
