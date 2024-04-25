import party from "/images/clients/home2.png";
import picnic from "/images/clients/home1.jpg";
import ParkBench from "/images/clients/Park-Bench-Group.jpeg";
import WaterFight from "/images/clients/Rome-Javon-Waterfight.jpeg";
import EstherGroup from "/images/clients/Esther-Group-House.jpeg";

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
        <img src={EstherGroup} alt="" loading="lazy" />
      </div>
      <div className="carousel-img-container">
        <img src={ParkBench} alt="" loading="lazy" />
      </div>
      <div className="carousel-img-container">
        <img src={WaterFight} alt="" loading="lazy" />
      </div>
      <div className="carousel-img-container">
        <img src={party} alt="" />
      </div>
      <div className="carousel-img-container">
        <img src={picnic} alt="" loading="lazy" />
      </div>
    </Slider>
  );
};
export default Carousel;
