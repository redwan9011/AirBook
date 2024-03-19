import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/VBLhSKx/65f2285bce36a62e819a38d134b77bed.png)'}}>
  <div className="hero-overlay bg-opacity-15"></div>
  <div className="  w-full h-full">
    <div className="flex flex-col max-w-6xl mx-auto  ">
        <h1 className="text-5xl text-white font-semibold mt-20 mb-7 pt-16">Welcome to <span className="text-blue-600 ">Airbook</span></h1>

        <div className="bg-white w-full rounded-md p-10">
            {/* buttons */}
        <div className="flex  justify-between">
           <div className=" flex gap-4">
         
           <NavLink  className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md "> <FaRegCircle></FaRegCircle> One way</NavLink>
           <NavLink  className="flex items-center gap-1 bg-blue-700 text-white px-2 py-1 rounded-md"> <FaRegDotCircle /> Round Trip</NavLink>
            
           </div>
           <div className=" flex gap-4">
            <button className="flex items-center gap-1 text-blue-600 bg-gray-200 px-2 py-1 rounded-md " > 1 Traveller <FaAngleDown /></button>
            <button className="flex items-center gap-1 text-blue-600 bg-gray-200 px-2 py-1 rounded-md "> Economy <FaAngleDown /></button>
           </div>
        </div>
        {/* locations */}

      <div className="flex justify-between items-center">
      <div className="grid grid-cols-4  gap-4">
            <div className="flex items-center border rounded-lg gap-2 p-2 mt-3">
                <h1 className="text-xl font-semibold pr-2 border-r-2 "> DAC</h1>
                <div >
                    <h2 className="font-medium">Dhaka</h2>
                    <p className="text-xs font-medium">Hazrat Shahzalal International</p>
                </div>
            </div>
            <div className="flex items-center border rounded-lg gap-2 p-2 mt-3">
                <h1 className="text-xl font-semibold pr-2 border-r-2 "> Cxb</h1>
                <div >
                    <h2 className="font-medium">{`Cox's Bazar`}</h2>
                    <p className="text-xs font-medium">{`Cox's Bazar International`}</p>
                </div>
            </div>
            <div className="flex items-center border rounded-lg gap-2 p-2 mt-3">
                <h1 className="text-xl font-semibold pr-2 border-r-2 "> 03</h1>
                <div >
                    <h2 className="font-medium">October</h2>
                    <p className="text-xs font-medium">Tuesday,2023</p>
                </div>
            </div>
            <div className="flex items-center border rounded-lg gap-2 p-2 mt-3">
                <h1 className="text-xl font-semibold pr-2 border-r-2 "> 05</h1>
                <div >
                    <h2 className="font-medium">October</h2>
                    <p className="text-xs font-medium">Thursday,2023</p>
                </div>
            </div>
        </div>
        <div className=" flex justify-center items-center bg-yellow-500 text-white p-4 text-2xl font-extrabold ">
            <span ><CiSearch /></span>
        </div>
      </div>

        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;