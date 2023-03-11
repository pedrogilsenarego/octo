import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "./styles.css";

const Carousel = () => {
  const Image =
    "https://images.pexels.com/photos/786220/pexels-photo-786220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const Image1 =
    "https://tse3.mm.bing.net/th?id=OIP.x9fjmSreFgFKaUIZsd7shwHaE5&pid=Api&P=0";
  const Image2 =
    "https://tse2.mm.bing.net/th?id=OIP.U0_SqaehHlBoIrQAOkoyCgHaEo&pid=Api&P=0";
  const Image3 =
    "https://tse1.mm.bing.net/th?id=OIP.O07HmnWRY3QL0G9fsj4bBQHaF6&pid=Api&P=0";
  const Image4 =
    "https://tse3.mm.bing.net/th?id=OIP.j5t6bb2Atl6Fuig5ZpRWMAHaEq&pid=Api&P=0";
  const Image5 = "https://mcdn.wallpapersafari.com/medium/58/42/YNoPB6.jpg";
  return (
    <Box className='box'>
      <Swiper
        // install Swiper modules
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: "true",
        }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        slidesPerView={3}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={Image} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt='' />
        </SwiperSlide>
        {/* <div className='slider-controller'>
        <div className='swiper-button-prev slider-arrow'>
          <h1>A</h1>
        </div>
        <div className='swiper-button-next slider-arrow'>
          <h1>B</h1>
        </div>
        <div className='swiper-pagination'></div>
      </div> */}
      </Swiper>
    </Box>
  );
};

export default Carousel;
