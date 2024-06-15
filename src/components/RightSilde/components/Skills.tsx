import { useState } from 'react'
import Title from './Title'

const Skills = () => {
  const [skills] = useState([
    'Komunikační dovednosti',
    'Konstruktivní kritičnost a schopnost přijímat kritiku',
    'Cílevědomá',
    'Zvyšování kvalifikace, ochota učit se novým věcem',
    'Pracovitost',
    'Samostatnost a zodpovědný přístup k řešení problémů',
    'Spolehlivost',
    'Schopnost se adaptovat a přijímat změny',
  ])

  return (
    <div className="mb-12 md:mb-20">
      <Title text="Mekké dovednosti" />
      <ul>
        {skills.map((item) => (
          <li key={item} className="mb-2 md:mb-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
