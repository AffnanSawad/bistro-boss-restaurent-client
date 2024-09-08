import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            
             
             <p className="text-yellow-600 mb-3">---- {subheading} ----</p>
             <h3 className="text-3xl font-bold uppercase border-y-4 py-4"> {heading} </h3>



        </div>
    );
};

export default SectionTitle;