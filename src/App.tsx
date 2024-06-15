import LeftSide from './components/LeftSide'
import RightSide from './components/RightSilde/Index'

function App() {
  return (
    <div className="relative bg-blue sm:bg-transparent before:hidden sm:before:block  before:bg-blue before:absolute before:left-0 before:top before:w-full sm:before:w-[400px] lg:before:w-[900px] before:h-full before:-z-10">
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
