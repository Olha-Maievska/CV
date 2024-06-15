import AboutMe from './components/AboutMe'
import Data from './components/Data'
import Header from './components/Header'
import Languages from './components/Languages'
import Links from './components/Links'
import MyPhoto from './components/MyPhoto'
import Skills from './components/Skills'
import Study from './components/Study'

const LeftSide = () => {
  return (
    <div className="w-full sm:w-4/12 lg:w-4/12 md:w-5/12 bg-blue py-8 md:py-14 lg:py-20 text-sm md:text-md leading-6 md:leading-8 text-gray text-center md:text-left">
      <MyPhoto />
      <Header />
      <div className="pr-0 sm:pr-4 md:pr-6 lg:pr-16">
        <AboutMe />
        <Study />
        <Data />
        <Skills />
        <Links />
        <Languages />
      </div>
    </div>
  )
}

export default LeftSide
