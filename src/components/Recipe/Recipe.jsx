import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
    // console.log(recipe);
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <>
            <div className='w-96 border-2 rounded-2xl p-6'>
                <img src={recipe_image} className='w-80 h-48 rounded-2xl'></img>
                <h3 className='font-semibold my-6'>{recipe_name}</h3>
                <p className='firasansfont '>{short_description}</p>
                <hr className='my-6' />
                <h3 className='mb-6'>Ingredients: {ingredients.length}</h3>
                <div className='mb-6 text-[#a1a1aa] '>
                    {
                        ingredients.map((ingredient,idx)=> <u key={idx}><li>{ingredient}</li></u>)
                    }
                </div>
                <hr className='my-6' />
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