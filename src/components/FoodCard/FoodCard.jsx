import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl relative">
      <figure>
        <img src={image} alt={name} className="w-full h-56 object-cover" />
      </figure>
      <p className="absolute top-4 right-4 px-4 bg-slate-900 text-white rounded-md">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Add PropTypes validation
FoodCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    recipe: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodCard;
