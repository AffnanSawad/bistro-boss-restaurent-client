import React from 'react';
import { Typewriter} from 'react-simple-typewriter'

const AskedQuestions = () => {

   
   





    return (
        <div className='App -mt-32'>
        <h1 className='text-4xl  text-center ' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold'  }}>
        Frequently{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Asked!','Questions!']}
             
              cursor
              cursorStyle='_'
              loop ={100000000000000000000000000000000000000000}	
  
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={500}
            
            />
          </span>
        </h1>

    {/* accordian */}
<div className="my-5">
<div className="collapse collapse-arrow bg-base-200 ">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-bold">What are Bistro Boss's hours of operation?</div>
  <div className="collapse-content font-medium">
    <p>Bistro Boss is open from 11:00 AM to 10:00 PM on weekdays and 11:00 AM to 11:00 PM on weekends. We are closed on public holidays.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">Do you offer delivery or takeout options?</div>
  <div className="collapse-content font-medium">
    <p> Yes, Bistro Boss offers both delivery and takeout. You can order directly from our website or through popular delivery platforms like UberEats and DoorDash.

</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">Is there a vegetarian or vegan menu available?</div>
  <div className="collapse-content font-medium ">
    <p >  Absolutely! Bistro Boss offers a wide variety of vegetarian and vegan dishes. We have a dedicated section on our menu featuring delicious plant-based options. Let your server know if you have any dietary restrictions.</p>
  </div>
</div>
</div>


      </div>

   


    );
};

export default AskedQuestions;