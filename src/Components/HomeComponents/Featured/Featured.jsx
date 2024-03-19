import { useEffect, useState } from 'react';
import axios from "axios";

const Featured = () => {
    const [ cards , setCards] = useState([])
    useEffect( ()=> {
        axios.get( '/featuredCard.json')
        .then( res => setCards(res.data))
    }, [])
    
    return (
      <div className='my-14'>
        <h1 className='my-10'>Featured Destination</h1>
          <div className='grid grid-cols-3 gap-10'>
            {
                cards.map( (card,i) => 
                    <div key={i} className="card  bg-base-100 shadow-xl">
                    <figure className="w-full">
                      <img src={card.image} alt="titlelocation" className="rounded-xl" />
                    </figure>
                    <div className="mt-3 text-center">
                      <h2 className="card-title">{card.title}</h2>
                      
                      <div className="flex justify-center">
                        <button className="btn btn-primary">{card.button}</button>
                      </div>
                    </div>
                  </div>)
            }
        </div>
      </div>
    );
};

export default Featured;