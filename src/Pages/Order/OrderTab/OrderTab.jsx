import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <div>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-10">
            {items.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// ✅ Add PropTypes validation
OrderTab.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      recipe: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OrderTab;
