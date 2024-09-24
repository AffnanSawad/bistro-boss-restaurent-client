
import { Typewriter} from 'react-simple-typewriter'

const CallUs = () => {
    return (
        <div className="w-2/3 ml-5 md:mx-44">

<div className='-mt-10 -mb-10'>
<h1 className='text-4xl  text-center ' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold'  }}>
 We're Here for You Anytime:{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Contact Us ','24/7']}
             
              cursor
              cursorStyle='_'
              loop ={100000000000000000000000000000000000000000}	
  
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={500}
            
            />
          </span>
        </h1>
</div>
         
        <h1 className="text-4xl font-bold bg-black text-white text-center my-20 py-20 "> Call Us : +880181235122 </h1>

        </div>
    );
};

export default CallUs;