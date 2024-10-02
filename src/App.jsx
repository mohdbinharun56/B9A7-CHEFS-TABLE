
// import './App.css'
import Cooking from './components/Cooking/Cooking'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
      <div className='md:flex'>
        <Recipes></Recipes>
        <Cooking></Cooking>
      </div>
    </>
  )
}


export default App
