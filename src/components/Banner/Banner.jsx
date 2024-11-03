const Banner = () => {
    return (
        <>
            <div className="bg-[url('assets/Rectangle1.png')] bg-no-repeat bg-cover h-screen rounded-3xl my-20">
                <h1 className="text-white text-center mx-auto my-auto font-bold text-5xl w-[800px] pt-40">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-white text-lg font-normal text-center w-[900px] mx-auto my-5">Everyday recipes with ratings and reviews by home cooks like you. Find easy dinner ideas, healthy recipes, plus helpful cooking tips and techniques.</p>
                <div className="mx-auto w-fit">
                    <button className="bg-[#0BE58A] p-4 rounded-full w-44 h-16 font-semibold text-xl mr-5 hover:bg-inherit hover:text-[white] hover:border-2 hover:border-white transition-all duration-1000">Explore Now</button>
                    <button className="border-2 border-white p-4 rounded-full w-52 h-16 font-semibold text-xl text-white hover:bg-[#0BE58A] hover:text-[#000000] transition-all duration-1000">Our Feedback</button>
                </div>
            </div>
        </>
    );
};

export default Banner;