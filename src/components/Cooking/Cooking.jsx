import PropTypes from "prop-types";
const Cooking = ({ cooking }) => {
    // console.log(cooking);
    return (
        <>
            <div className="w-1/3 border-2 rounded-2xl p-6">
                <h1 className="text-center font-bold text-3xl mb-5">Want to cook: {cooking.length}</h1>
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
                                    cooking.map((item,idx) => {
                                        console.log(item)
                                        return (
                                            <>
                                                <tr className="font-normal text-sm bg-[#dad8d8]">

                                                    <td>{idx+1}</td>
                                                    <td className="w-40 text-start pl-2">{item.recipe_name}</td>
                                                    <td className="text-center pl-2">{item.preparing_time}</td>
                                                    <td className="text-end pr-2 w-28">{item.calories}</td>
                                                    <td className="w-20">
                                                        <button className="bg-[#0BE58A] h-10 text-[#282828] p-2 rounded-full">Preparing</button>
                                                    </td>
                                                </tr>
                                            </>
                                        );
                                    })
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.array
}
export default Cooking;