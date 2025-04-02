import party from "/md-images/clients/home2.webp";
import picnic from "/md-images/clients/home1.webp";
import ParkBench from "/md-images/clients/Park-Bench-Group.webp";
import WaterFight from "/md-images/clients/Rome-Javon-Waterfight.webp";
import EstherGroup from "/md-images/clients/Esther-Group-House.webp";

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
      {/* <div className="carousel-img-container">
        <img
          src={EstherGroup}
          alt="Esther's house of clients and staff"
          fetchPriority="high"
        />
      </div> */}
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
      {/* <div className="carousel-img-container">
        <img src={party} alt=" Christmas party" loading="lazy" />
      </div> */}
      <div className="carousel-img-container">
        <img src={picnic} alt=" Picnic at the park" loading="lazy" />
      </div>
    </Slider>
  );
};
export default Carousel;
