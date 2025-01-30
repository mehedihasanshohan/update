import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/assets/home/slide1.jpg';
import slide2 from '../../../assets/assets/home/slide2.jpg';
import slide3 from '../../../assets/assets/home/slide3.jpg';
import slide4 from '../../../assets/assets/home/slide4.jpg';
import slide5 from '../../../assets/assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11am to 10pm"}
        heading={"Order Online"}
      />
    <Swiper
      slidesPerView={6}
      initialSlide={0}
      centeredSlides={false}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-12"
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 6 },
      }}
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>SALADS</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>SOUPS</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>PIZZA</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>SOUPS</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>DESSERT</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>SALADS</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>SALADS</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>SALADS</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h2 className='text-4xl text-center -mt-16 text-rose-700'>SALADS</h2>
      </SwiperSlide>
    </Swiper>
  </section>
  )
}

export default Category