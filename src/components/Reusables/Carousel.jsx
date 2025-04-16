const picnic = `${import.meta.env.VITE_CDN_PATH}/md-images/clients/home1.webp`;
const laCruzOriginal = `${
  import.meta.env.VITE_CDN_PATH
}/md-images/clients/la-cruz-original.webp`;
const SpringAndClientCrafts = `${
  import.meta.env.VITE_CDN_PATH
}/md-images/clients/Spring-and-Client-Crafts-mobile.webp`;
const ParkBench = `${
  import.meta.env.VITE_CDN_PATH
}/md-images/clients/Park-Bench-Group.webp`;
const WaterFight = `${
  import.meta.env.VITE_CDN_PATH
}/md-images/clients/Rome-Javon-Waterfight.webp`;

import Slider from "react-slick";

const Carousel = ({ slidesToShow }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    lazyLoad: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      <div className="carousel-img-container">
        <img
          src={laCruzOriginal}
          alt="La Cruz clients standing together on a creek bridge smiling and enjoying the afternoon."
          fetchPriority="high"
        />
      </div>
      <div className="carousel-img-container">
        <img
          src={ParkBench}
          alt="Clients enjoying a picnic at the park"
          loading="lazy"
        />
      </div>
      <div className="carousel-img-container">
        <img
          src={WaterFight}
          alt="Water ballon fight between an admin and a client"
          loading="lazy"
        />
      </div>
      <div className="carousel-img-container">
        <img
          src={SpringAndClientCrafts}
          alt="Admin Spring doing fun arts and crafts with a client"
          loading="lazy"
        />
      </div>
      <div className="carousel-img-container">
        <img src={picnic} alt=" Picnic at the park" loading="lazy" />
      </div>
    </Slider>
  );
};
export default Carousel;
