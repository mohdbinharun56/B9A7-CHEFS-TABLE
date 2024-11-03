import { useEffect } from "react";
import { useState } from "react";
import Cooking from './components/Cooking/Cooking'
import Recipes from './components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

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
      // alert('This recipe is already cookig');
      toast("Item already exists!");
    }
  }
  // console.log(cooking);

  const handlePrepare = (item) => {
    const isExist = prepareCook.find(prepare => prepare.recipe_id == item.recipe_id);
    setCalories(calories + item.calories);
    setPreparing_time(preparing_time + item.preparing_time);

    if (isExist || !isExist) {
      const [item, ...restItem] = cooking;
      setCooking(restItem);
      setPrepareCook([...prepareCook, item]);
    }
  }

  return (
    <>
      <header>
        <Header></Header>
      </header>

      <main>
        <section>
          <Banner></Banner>
        </section>
        <div>
          <h3 className='text-center text-[#150B2B] font-bold text-4xl my-5 font-serif'>Our Recipes</h3>
          <p className='text-[#150B2B] font-normal text-sm font-sans text-center my-5 mx-auto'>Cooking with the Buchanans, Rasmussens, Widmanns, family and friends.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 my-10">
          <Recipes recipes={recipes} handleCook={handleCook}></Recipes>
          <Cooking cooking={cooking} prepareCook={prepareCook} handlePrepare={handlePrepare} calories={calories} preparing_time={preparing_time}></Cooking>
        </div>
        <div><ToastContainer></ToastContainer></div>
      </main>
    </>
  )
}


export default App
