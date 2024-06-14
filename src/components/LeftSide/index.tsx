import AboutMe from './components/AboutMe'
import MyPhoto from './components/MyPhoto'

const LeftSide = () => {
  return (
    <div className="w-5/12 bg-blue py-20 flex justify-end pr-20">
      <div>
        <MyPhoto />
        <AboutMe />
      </div>
    </div>
  )
}

export default LeftSide
