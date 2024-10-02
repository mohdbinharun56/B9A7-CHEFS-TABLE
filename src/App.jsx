
// import './App.css'
import Cooking from './components/Cooking/Cooking'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
      <div className='mx-auto md:flex gap-4'>
        <Recipes></Recipes>
        <Cooking></Cooking>
      </div>
    </>
  )
}


export default App
