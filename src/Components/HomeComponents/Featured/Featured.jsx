import { useEffect, useState } from 'react';
import axios from "axios";

const Featured = () => {
    const [ cards , setCards] = useState([])
    useEffect( ()=> {
        axios.get( '/featuredCard.json')
        .then( res => setCards(res.data))
    }, [])
    
    return (
      <div className='my-14 max-w-6xl mx-auto' >
        <h1 className='my-10 text-3xl font-bold'>Featured Destination</h1>
          <div className='grid grid-cols-3 gap-10'>
            {
                cards.map( (card,i) => 
                    <div key={i} className="card  bg-base-100 shadow-xl w-full">
                    <figure className="">
                      <img src={card.image} alt="titlelocation" className="rounded-xl w-full px-2" />
                    </figure>
                    <div className="mt-3 text-center">
                      <h2 className="card-title px-2">{card.title}</h2>
                      
                      <div className="flex justify-center">
                        <button className="px-8 py-2 my-2 font-semibold bg-yellow-400  rounded-lg">{card.button}</button>
                      </div>
                    </div>
                  </div>)
            }
        </div>
      </div>
    );
};

export default Featured;