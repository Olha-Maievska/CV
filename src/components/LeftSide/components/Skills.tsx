import { useState } from 'react'
import Title from '../../Title'

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
    <div className="w-96 mx-auto border-b border-gray pb-10 mb-20">
      <Title text="tvrdé dovednosti" color="gold" />
      <ul className="text-gray leading-8">
        {skillsData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
