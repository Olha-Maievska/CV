import Title from './Title'

const Courses = () => {
  return (
    <div className="mb-12 md:mb-20">
      <Title text="Kurzy" />
      <ul>
        <li className="mb-2 md:mb-4">
          <div>
            03/2020 - 05/2020 -{' '}
            <span className="font-medium">
              kurz základů HTML, CSS, SASS - 43 hodin
            </span>
            <p></p>
          </div>
        </li>
        <li className="mb-2 md:mb-4">
          <div>
            06/2021 - 09/2021 -{' '}
            <span className="font-medium">
              Pokročilý JavaScript. Vytváření Excelu bez rámců - 40 hodin
            </span>
            <p></p>
          </div>
        </li>
        <li className="mb-2 md:mb-4">
          <div>
            09/2021 - 11/2021 -{' '}
            <span className="font-medium">Reat + Redux</span>
            <p></p>
          </div>
        </li>
        <li className="mb-2 md:mb-4">
          <div>
            04/2023 - 60/2023 -{' '}
            <span className="font-medium">
              program Work In Tech Ukraine, kurz v oblasti IT podpory - 116
              hodin
            </span>
            <p></p>
          </div>
        </li>
        <li>
          <div>
            11/2023 - 01/2024 -{' '}
            <span className="font-medium">Zaklady Typescript, 60 hodin</span>
            <p></p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Courses
