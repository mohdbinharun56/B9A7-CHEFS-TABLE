import PropTypes from 'prop-types';
const Recipe = ({ recipe }) => {
    // console.log(recipe);
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <>
            <div>
                <img src={recipe_image}></img>
                <h3>{recipe_name}</h3>
                <p>{short_description}</p>
                <h3>Ingredients:{ingredients.length}</h3>
                <div>
                    {
                        ingredients.map((ingredient,idx)=> <ul key={idx}><li>{ingredient}</li></ul>)
                    }
                </div>
                <div>
                    <span className='mr-3'>{preparing_time}</span>
                    <span>{calories}</span>
                </div>
            </div>
        </>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
}

export default Recipe;