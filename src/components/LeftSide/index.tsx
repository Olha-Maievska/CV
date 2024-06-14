import AboutMe from './components/AboutMe'
import Data from './components/Data'
import Languages from './components/Languages'
import Links from './components/Links'
import MyPhoto from './components/MyPhoto'
import Skills from './components/Skills'
import Study from './components/Study'

const LeftSide = () => {
  return (
    <div className="w-5/12 bg-blue py-20 flex justify-end pr-20">
      <div>
        <MyPhoto />
        <AboutMe />
        <Study />
        <Skills />
        <Links />
        <Languages />
        <Data />
      </div>
    </div>
  )
}

export default LeftSide
