import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/assets/home/slide1.jpg';
import slide2 from '../../../assets/assets/home/slide2.jpg';
import slide3 from '../../../assets/assets/home/slide3.jpg';
import slide4 from '../../../assets/assets/home/slide4.jpg';
import slide5 from '../../../assets/assets/home/slide5.jpg';
import img3 from '../../../assets/assets/home/03.png'

const Category = () => {
  return (
    <>
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
    </Swiper>
  </>
  )
}

export default Category