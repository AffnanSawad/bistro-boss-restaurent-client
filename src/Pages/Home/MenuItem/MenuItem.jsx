
const MenuItem = ({item}) => {
  
    const {name,recipe,image,price} = item;


    return (
        <div className="flex space-x-5">
            <img className="w-[120px] rounded-full" src={image} alt="" />
           
            <div >
                <h3 className="uppercase font-semibold"> {name}--------- </h3>
                <p> {recipe} </p>
            </div>
            
            <p className="text-yellow-500"> ${price} </p>

        </div>
    );
};

export default MenuItem;