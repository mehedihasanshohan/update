
// import { Link } from 'react-router-dom';
// import Cover from '../../Shared/Cover/Cover';
// import MenuItem from '../../Shared/MenuItem/MenuItem';

// const MenuCategory = ({items, title, img}) => {
//     return (
//         <div className='pt-8'>
//             { title && <Cover img={img} title={title}></Cover>}
//             <div className="grid md:grid-cols-2 gap-10 my-16">
//                 {
//                     items.map(item => <MenuItem
//                         key={item._id}
//                         item={item}
//                     ></MenuItem>)
//                 }
//             </div>
//             <Link to={`/order/${title}`}>
//             <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
//             </Link>
//         </div>
//     );
// };

// export default MenuCategory;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cover from '../../../Shared/Cover/Cover';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title} />}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {items.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

// ✅ Props validation
MenuCategory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
    title: PropTypes.string,
    img: PropTypes.string
};

export default MenuCategory;
