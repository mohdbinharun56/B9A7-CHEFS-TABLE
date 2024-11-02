import PropTypes from "prop-types";
const Cooking = ({ cooking,handlePrepare,prepareCook,preparing_time,calories }) => {
    // console.log(cooking);
    

    // console.log(prepareCook)
    return (
        <>
            <div className="w-1/3 border-2 rounded-2xl p-6">
                <h1 className="text-center font-bold text-xl mb-5">Want to cook: {cooking.length}</h1>
                <hr />
                <div className="mt-5">
                    <table className="w-full text-[#878787]">
                        <thead>
                            <tr>
                                <td></td>
                                <td className="text-start pl-2">Name</td>
                                <td className="text-center pl-2">Time</td>
                                <td className="text-end pr-2">Calories</td>
                            </tr>
                        </thead>
                        <tbody className="mt-2">
                            {
                                cooking.map((item, idx) => {
                                    // console.log(item)
                                    return (
                                        <>
                                            <tr className="font-normal text-sm bg-[#f5f3f3] h-20">

                                                <td>{idx + 1}</td>
                                                <td className="w-40 text-start pl-2">{item.recipe_name}</td>
                                                <td className="text-center pl-2">{item.preparing_time}</td>
                                                <td className="text-end w-28">{item.calories}</td>
                                                <td className="w-20">
                                                    <button onClick={() => handlePrepare(item)} className="bg-[#0BE58A] h-10 text-[#282828] p-2 rounded-full">Preparing</button>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <h1 className="text-center font-bold text-xl mb-5 mt-20">Currently cooking: {prepareCook.length}</h1>
                <hr />
                <div className="mt-5">
                    <table className="w-full text-[#878787]">
                        <thead>
                            <tr>
                                <td></td>
                                <td className="text-start pl-2">Name</td>
                                <td className="text-center pl-2">Time</td>
                                <td className="text-end pr-2">Calories</td>
                            </tr>
                        </thead>
                        <tbody className="mt-2">
                            {
                                prepareCook.map((item,idx) => {
                                    // console.log(item)
                                    // setPreparedItem([...preparedItem,item]);
                                    return (
                                        <>
                                            <tr className="font-normal text-sm bg-[#f5f3f3] h-20">

                                                <td>{idx+1}</td>
                                                <td className="w-40 text-start pl-2">{item.recipe_name}</td>
                                                <td className="text-center pl-2">{item.preparing_time}</td>
                                                <td className="text-end w-28">{item.calories}</td>
                                            </tr>
                                        </>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="w-fit ml-auto text-[#282828]">
                    <div className="flex justify-around gap-10 mt-20"> 
                        <h2>Total Time = </h2>
                        <h2>Total Calories = </h2>

                    </div>
                    <div className="flex justify-around gap-10 mt-2"> 
                        <h2>{preparing_time}</h2>
                        <h2>{calories}</h2>
                    </div>
                </div>

            </div>
        </>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.array,
    handlePrepare: PropTypes.func,
    prepareCook:PropTypes.array,
    calories:PropTypes.number,
    preparing_time: PropTypes.number
}
export default Cooking;