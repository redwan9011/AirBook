import axios from "axios";
import { useEffect, useState } from "react";


const PopularAirlines = () => {
    const [ airlines , setAirlines] = useState([])
    useEffect( ()=> {
        axios.get( '/PopularAirlines.json')
        .then( res => setAirlines(res.data))
    }, [])
   
    return (
        <div className="my-16 max-w-6xl mx-auto">
            <h1 className=" my-8 text-3xl font-bold">Popular Airlines</h1>
           <div className="grid grid-cols-4 gap-4">
         {
            airlines.map( (airline, i ) => 
            <div key={i} className="flex items-center gap-4 ">
            <img className="rounded-full w-14 h-14" src={airline.logo} alt="airline log" />
            <div>
                <h2 className="font-semibold text-blue-700">{airline.title}</h2>
                <span>star {airline.ratings} ({airline.reviews} reviews)</span>
            </div>
        </div>)
         }
           </div>
        </div>
    );
};

export default PopularAirlines;