import PropTypes from 'prop-types';

// import { useEffect } from "react";
// import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({recipes,handleCook})=> {
    // const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //     fetch('recipesData.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log(data);
    //             setRecipes(data);
    //         });
    // }, []);

    // const handleCook = () =>{
    //     console.log();
    // }

    return (
        <>
            <div className="w-2/3">
                <h3>Our Recipes</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum porro, est, qui molestiae fugiat voluptatibus quos aliquam recusandae unde ad incidunt perspiciatis. At, possimus. Unde minima excepturi facere praesentium expedita.</p>
                <div className="md:grid grid-cols-2 gap-4 mt-10">
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleCook={handleCook}></Recipe>)
                    }
                </div>
            </div>
        </>
    );
}

Recipes.propTypes = {
    recipes: PropTypes.array,
    handleCook: PropTypes.func
};
export default Recipes;