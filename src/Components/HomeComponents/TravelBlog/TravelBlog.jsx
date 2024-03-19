
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

export default function TravelBlog() {
  const [ setSwiperRef] = useState(null);


  return (
   <div className='max-w-6xl mx-auto'>
    <h1 className=" my-8 text-3xl font-bold">Travel Blog</h1>
     <div className=' pb-16 h-full'>
       
       <Swiper
         onSwiper={setSwiperRef}
         slidesPerView={3}
         centeredSlides={true}
         spaceBetween={30}
         pagination={{
           type: 'fraction',
         }}
         navigation={true}
         modules={[Pagination, Navigation]}
         className="mySwiper"
       >
         <SwiperSlide>
         <div className="card card-compact min-h-full  bg-base-100 shadow-xl mb-10">
   <figure><img src="https://i.ibb.co/g7RkRVc/111e.png" alt="Shoes" /></figure>
   <div className="text-left px-6">
    <h2 className='mt-2'><span className='text-yellow-500'>Work and travel </span> 16 september 2023</h2>
    <h1 className='my-4 font-bold'>Embracing The Digital Nomad Lifesytle The Digital Nomad Thr..</h1>
    <div className="divider"></div>
 
   </div>
 </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="card card-compact min-h-full  bg-base-100 shadow-xl mb-10">
   <figure><img src="https://i.ibb.co/g7RkRVc/111e.png" alt="Shoes" /></figure>
   <div className="text-left px-6">
    <h2 className='mt-2'><span className='text-yellow-500'>Work and travel </span> 16 september 2023</h2>
    <h1 className='my-4 font-bold'>Embracing The Digital Nomad Lifesytle The Digital Nomad Thr..</h1>
    <div className="divider"></div>
 
   </div>
 </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="card card-compact min-h-full  bg-base-100 shadow-xl mb-10">
   <figure><img src="https://i.ibb.co/g7RkRVc/111e.png" alt="Shoes" /></figure>
   <div className="text-left px-6">
    <h2 className='mt-2'><span className='text-yellow-500'>Work and travel </span> 16 september 2023</h2>
    <h1 className='my-4 font-bold'>Embracing The Digital Nomad Lifesytle The Digital Nomad Thr..</h1>
    <div className="divider"></div>
 
   </div>
 </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="card card-compact min-h-full  bg-base-100 shadow-xl mb-10">
   <figure><img src="https://i.ibb.co/g7RkRVc/111e.png" alt="Shoes" /></figure>
   <div className="text-left px-6">
    <h2 className='mt-2'><span className='text-yellow-500'>Work and travel </span> 16 september 2023</h2>
    <h1 className='my-4 font-bold'>Embracing The Digital Nomad Lifesytle The Digital Nomad Thr..</h1>
    <div className="divider"></div>
 
   </div>
 </div>
         </SwiperSlide>
       </Swiper>
 
      
     </div>
   </div>
  );
}
