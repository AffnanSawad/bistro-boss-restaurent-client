// import SecTitle from "../../../Components/SecTitle/SecTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Testimonials = () => {

    const [reviews,setreviews] = useState([])

    useEffect(  
        ()=>{
            fetch('reviews.json')
            .then(res=> res.json())
            .then(data=>{
                setreviews(data);
            })
        }
        
        , [])
    return (
        <section className="my-20">

            <SectionTitle
            
            heading={'Testimonials'}
            subheading={'What Our Clients Say'}
            
            ></SectionTitle>



<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
       
    
    {
        reviews.map(review => <SwiperSlide
         
            key={review._id}
        >
            
            <div className="m-10">
              
              <p className="font-semibold"> {review.details} </p>
              <h4 className="text-2xl font-bold text-yellow-500 text-center"> {review.name} </h4>


            </div>
            
            </SwiperSlide> )
    }


      </Swiper>
            
        </section>
    );
};

export default Testimonials;