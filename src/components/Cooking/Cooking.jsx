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
                            <tr className="text-center">
                                <td></td>
                                <td className="text-start pl-2">Name</td>
                                <td>Time</td>
                                <td>Calories</td>
                            </tr>
                        </thead>
                        <tbody className="mt-2">
                                {
                                    cooking.map((item,idx) => {
                                        console.log(item)
                                        return (
                                            <>
                                                <tr className="text-center font-normal text-sm">
                                                    <td>{idx+1}</td>
                                                    <td className="w-40 text-start pl-2">{item.recipe_name}</td>
                                                    <td>{item.preparing_time}</td>
                                                    <td>{item.calories}</td>
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