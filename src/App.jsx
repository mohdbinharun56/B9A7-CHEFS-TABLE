import { useEffect } from "react";
import { useState } from "react";
import Cooking from './components/Cooking/Cooking'
import Recipes from './components/Recipes/Recipes'

function App() {
 
  const [recipes, setRecipes] = useState([]);
  const [cooking,setCooking] = useState([]);
  const [prepareCook,setPrepareCook] = useState([]);

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
    // console.log(cooking);

     const handlePrepare = (item) => {

        const isExist = prepareCook.find(prepare=>prepare.recipe_id==item.recipe_id);
        if(!isExist){
            const [item,...restItem] = cooking;
            // console.log(restItem);
            setCooking(restItem);
            setPrepareCook([...prepareCook,item]);
        }
        else{
            alert('Prepared to cook is already exist');
        }
    }

  return (
    <>
      <div className='mx-auto md:flex gap-4'>
        <Recipes recipes={recipes} handleCook={handleCook}></Recipes>
        <Cooking cooking={cooking} prepareCook={prepareCook} handlePrepare={handlePrepare}></Cooking>
      </div>
    </>
  )
}


export default App
