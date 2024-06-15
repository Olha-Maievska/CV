import Title from './Title'

const Experiences = () => {
  return (
    <div className="mb-12 md:mb-20">
      <Title text="Pracovní zkušenocti" />
      <ul>
        <li className="flex justify-between mb-3 items-start">
          <div className="w-48 lg:w-80">
            <p>Dělnice na výrobě</p>
            <p>Stabilo, Česko, Český Krumlov</p>
          </div>

          <span className="w-48 text-right">01/2022 - součastnost</span>
        </li>
        <li className="flex justify-between mb-3 items-start">
          <div className="w-48 lg:w-80">
            <p>Operátor na lince</p>
            <p>Aptiv, Maďarsko, Tatabaija</p>
          </div>

          <span className="w-48 text-right">06/2019 - 01/2021</span>
        </li>
        <li className="flex justify-between mb-3">
          <div className="w-48 lg:w-80">
            <p>Práce v automobilkách na krátkodobá víza</p>
            <p>Lear, Carmel, Česko</p>
          </div>

          <span className="w-48 text-right">03/2018 - 04/2019</span>
        </li>
        <li className="flex justify-between mb-3">
          <div className="w-48 lg:w-80">
            <p>Švadlena</p>
            <p>Sirius, Ukrajina, Vinnytsia</p>
          </div>

          <span className="w-48 text-right">09/2014 - 02/2018</span>
        </li>
        <li className="flex justify-between mb-">
          <div className="w-48 lg:w-80">
            <p>Tajemník</p>
            <p>organizace "Hlas Lidu",Ukrajina, Vinnytsia</p>
          </div>
          <span className="w-48 text-right">09/2013 - 08/2014</span>
        </li>
      </ul>
    </div>
  )
}

export default Experiences
