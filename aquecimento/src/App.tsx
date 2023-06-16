import { useState } from 'react'
import Card from './components/Card'

type CardType = {
  title: string
  slogan: string
}

const App = () => {
  /**
   * Usaremos o hook useState para fazer o Data Binding
   * com os campos de text de título e slogan
   */
  const [title, setTitle] = useState('')
  const [slogan, setSlogan] = useState('')
  const [cards, setCards] = useState<CardType[]>([])

  const addCard = () => {
    /**
     * A linha de código abaixo adiciona um novo elemento ao array cards.
     */
    setCards([...cards, { title, slogan }])
  }

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Digite o título'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='Digite o slogan'
          value={slogan}
          onChange={(e) => setSlogan(e.target.value)}
        />

        <button onClick={() => addCard()}>Adicionar</button>
      </div>

      <div>
        {cards.map((c, index) => (
          <Card key={index} title={c.title} slogan={c.slogan} />
        ))}
      </div>
    </div>
  )
}

export default App
