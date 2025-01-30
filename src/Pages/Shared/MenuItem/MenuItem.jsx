import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className="w-[100px]"
        src={image}
        alt={name}
      />
      <div>
        <h3 className="uppercase">{name}------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-rose-700">${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    recipe: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
