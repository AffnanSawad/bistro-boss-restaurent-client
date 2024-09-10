

const FoodCard = ({item}) => {
        
    const {name,recipe,image,price} = item;


    return (
        <div className="card bg-base-100 w-96 shadow-xl my-10">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name} </h2>
          <p className="font-semibold"> ${price} </p>
          <p className="font-semibold"> {recipe} </p>
          <div className="card-actions ">
            <button className="btn btn-accent text-white">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;