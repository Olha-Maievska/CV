import { useState } from 'react'
import Title from './Title'

const Hobby = () => {
  const [hobby] = useState([
    'Informační technologie',
    'sport',
    'čtení',
    'cestování',
  ])
  return (
    <div>
      <Title text="kónický" />
      <ul>
        {hobby.map((item) => (
          <li key={item} className="uppercase mb-1 md:mb-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hobby
