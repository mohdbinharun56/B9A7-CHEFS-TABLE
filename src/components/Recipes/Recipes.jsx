import PropTypes from 'prop-types';
import Recipe from "../Recipe/Recipe";

const Recipes = ({recipes,handleCook})=> {

    return (
        <>
            <div className="">
                <div className="grid lg:grid-cols-2 gap-10 mt-10 w-fit mx-auto">
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