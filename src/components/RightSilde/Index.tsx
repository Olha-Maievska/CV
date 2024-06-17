import Courses from './components/Courses'
import Experiences from './components/Experiences'
import Header from './components/Header'
import Hobby from './components/Hobby'
import Note from './components/Note'
import Skills from './components/Skills'

const RightSide = () => {
  return (
    <div className="w-full sm:w-8/12 lg:w-8/12 md:w-7/12 bg-blue sm:bg-white text-gray sm:text-blue py-8 md:py-14 lg:py-20 pl-0 sm:pl-4 md:pl-6 lg:pl-16 text-sm md:text-md leading-6 md:leading-8">
      <div>
        <Header />
        <Experiences />
        <Courses />
        <Skills />
        <Hobby />
        <Note /> 
      </div>
    </div>
  )
}

export default RightSide
