import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFire } from '@fortawesome/free-solid-svg-icons';
const Recipe = ({ recipe,handleCook }) => {
    // console.log(recipe);
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <>
            <div className='mt-5 w-80 md:w-96 border-2 rounded-2xl p-6'>
                <img src={recipe_image} className='w-80 h-48 rounded-2xl'></img>
                <h3 className='font-semibold my-6'>{recipe_name}</h3>
                <p className='firasansfont '>{short_description}</p>
                <hr className='my-6' />
                <h3 className='mb-6'>Ingredients: {ingredients.length}</h3>
                <div className='mb-6 text-[#a1a1aa] '>
                    {
                        ingredients.map((ingredient,idx)=> <li key={idx}>{ingredient}</li>)
                    }
                </div>
                <hr className='my-6' />
                <div>
                    <span className='mr-3'><FontAwesomeIcon icon={faClock} /> {preparing_time} minutes</span>
                    <span><FontAwesomeIcon icon={faFire} /> {calories} calories</span>
                </div>

                <div className='mt-6'>
                    <button onClick={()=>handleCook(recipe)} className='bg-[#0BE58A] text-[#150B2B] rounded-full w-40 h-12'>Want To Cook</button>
                </div>
            </div>

        </>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleCook: PropTypes.func
}

export default Recipe;