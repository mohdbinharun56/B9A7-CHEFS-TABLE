
// import './App.css'
import { useEffect } from "react";
import { useState } from "react";
import Cooking from './components/Cooking/Cooking'
import Recipes from './components/Recipes/Recipes'

function App() {
 
  const [recipes, setRecipes] = useState([]);
  const [cooking,setCooking] = useState([]);

    useEffect(() => {
        fetch('recipesData.json')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setRecipes(data);
            });
    }, []);

    const handleCook = (recipe)=>{
      const isExist = cooking.find(item=>item.recipe_id == recipe.recipe_id);
      if(!isExist){
        setCooking([...cooking,recipe]);
      }else{
        alert('This recipe is already cookig');
      }
      

    }
    console.log(cooking);
  return (
    <>
      <div className='mx-auto md:flex gap-4'>
        <Recipes recipes={recipes} handleCook={handleCook}></Recipes>
        <Cooking></Cooking>
      </div>
    </>
  )
}


export default App
