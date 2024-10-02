// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

function Recipes() {
    const [recipes,setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipesData.json')
        .then(response=>response.json())
        .then(data=>{
            // console.log(data);
            setRecipes(data);
        });
    },[]);
    
    return(
        <>
            <div className="w-2/3">
                <h3>Our Recipes</h3>
                <p>snvkdnvjsnvnvwnvonvvodnnviwnvoiwnvnvjnvvla nasnhvwhnvkjn jnvaijnvv jnjsanvads asijvnuvi vaijnanvi v avnv</p>
                <div>
                    {
                        recipes.map(recipe=><Recipe recipe={recipe}></Recipe>)
                    }
                </div>
            </div>
        </>
    );
}

Recipes.propTypes = {

};

export default Recipes;