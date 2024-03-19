

const NewsLatter = () => {
    return (
        <div className="grid grid-cols-11 items-center justify-center max-w-6xl mx-auto mb-20" >
            <div className="col-span-5">
            <img className="w-2/4 rotate-12" src="https://i.ibb.co/BKFn8Yj/unnamed.png" alt="" />
            </div>
            <div className="col-span-6">
                <h1 className="text-5xl text-blue-950  font-bold">Subscribe To Our Newslatter!!</h1>
                <h3 className="text-2xl text-blue-700 my-3">Subscribe To Our Newslatter and Stay Updated</h3>
                <input type="text" placeholder="Your Email" className=" py-4 px-2 w-full border-2 border-blue-600  rounded-lg placeholder:text-blue-200 placeholder:text-lg" />
                <input type="button" value="Subscribe" className="w-full bg-yellow-500 rounded-lg py-4 text-xl font-semibold mt-3" />
            </div>
        </div>
    );
};

export default NewsLatter;