import { Parallax } from "react-parallax";


const Cover = ({image,title}) => {
    return (
        <Parallax   blur={{ min: -50, max: 50 }} 
        bgImage={image}
        bgImageAlt="the cat" strength={200}>
        <div
        className="hero h-[600px]"
       >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 uppercase text-4xl font-bold"> {title} </h1>
         
            


          </div>
        </div>
      </div>
    </Parallax>



      
    );
};

export default Cover;