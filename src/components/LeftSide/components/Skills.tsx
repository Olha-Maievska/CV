import { useState } from 'react'
import Title from './Title'

const Skills = () => {
  const [skillsData] = useState([
    'HTML, CSS, SASS/SCSS',
    ' JavaScript',
    'React',
    'Typescript',
    'Redux, RTK',
    'Tailwind CSS ',
    'Verzovací systém GIT',
  ])
  return (
    <div className="mb-12 md:mb-20">
      <Title text="tvrdé dovednosti" />
      <ul>
        {skillsData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
