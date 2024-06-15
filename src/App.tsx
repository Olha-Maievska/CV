import LeftSide from './components/LeftSide'
import RightSide from './components/RightSilde/Index'

function App() {
  return (
    <div className="relative bg-blue sm:bg-white  sm:before:bg-blue sm:before:absolute sm:before:left-0 sm:before:top sm:before:w-[400px] lg:before:w-[900px] before:h-full before:-z-10">
      <div className="container font-main">
        <div className="block sm:flex justify-between">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  )
}

export default App
