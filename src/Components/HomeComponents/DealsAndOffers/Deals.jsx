

const Deals = () => {
    return (
        <div className="mb-16 max-w-6xl mx-auto">
            <h1 className="my-10 text-3xl font-bold">Deals and Offers</h1>
            <div className="grid grid-cols-3 gap-8">
                <div className="flex gap-3 shadow-2xl items-center bg-white  rounded-md">
                    <img className="w-36" src="https://i.ibb.co/DQ6Tmg6/bkash.png" alt="" />
                    <div>
                        <h3 className="font-semibold">With Bkash Payment Only</h3>
                        <h2 className="text-lg text-blue-700 font-bold">Up To 14% Discount On the Base Fare Of Domestic Flights </h2>
                    </div>
                </div>
                <div className="flex gap-3 shadow-2xl items-center bg-white  rounded-md">
                    <img className="w-36" src="https://i.ibb.co/C94GQVJ/discount.png" alt="" />
                    <div>
                        <h3 className="font-semibold">With Bkash Payment Only</h3>
                        <h2 className="text-lg text-blue-700 font-bold">Up To 14% Discount On the Base Fare Of Domestic Flights </h2>
                    </div>
                </div>
                <div className="flex gap-3 shadow-2xl items-center bg-white  rounded-md">
                    <img className="w-36" src="https://i.ibb.co/nnLhswp/travel.png" alt="" />
                  
                    <div>
                        <h3 className="font-semibold">With Bkash Payment Only</h3>
                        <h2 className="text-lg text-blue-700 font-bold">Up To 14% Discount On the Base Fare Of Domestic Flights </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;