import { useEffect } from "react";
import { useState } from "react";
import Cooking from './components/Cooking/Cooking'
import Recipes from './components/Recipes/Recipes'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [prepareCook, setPrepareCook] = useState([]);
  const [calories, setCalories] = useState(0);
  const [preparing_time, setPreparing_time] = useState(0);

  useEffect(() => {
    fetch('recipesData.json')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setRecipes(data);
      });
  }, []);

  const handleCook = (recipe) => {
    const isExist = cooking.find(item => item.recipe_id == recipe.recipe_id);
    if (!isExist) {

      setCooking([...cooking, recipe]);
    } else {
      alert('This recipe is already cookig');
    }
  }
  // console.log(cooking);

  const handlePrepare = (item) => {
    const isExist = prepareCook.find(prepare => prepare.recipe_id == item.recipe_id);
    setCalories(calories+item.calories);
    setPreparing_time(preparing_time+item.preparing_time);

    if(isExist || !isExist){
      const [item, ...restItem] = cooking;
      setCooking(restItem);
      setPrepareCook([...prepareCook,item]);
    }
  }

  return (
    <>
      <div className='w-fit flex flex-col lg:flex-row gap-4'>
        <Recipes recipes={recipes} handleCook={handleCook}></Recipes>
        <Cooking cooking={cooking} prepareCook={prepareCook} handlePrepare={handlePrepare} calories={calories} preparing_time={preparing_time}></Cooking>
      </div>
    </>
  )
}


export default App
