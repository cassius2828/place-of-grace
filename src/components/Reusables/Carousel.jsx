import picnic from "../../../public/images/clients/home2.png";
import party from "../../../public/images/clients/home1.jpg";
import xmas from "../../../public/images/clients/home3.png";
// import groupLeft from "../../../public/images/clients/group-left.png";
// import groupMiddle from "../../../public/images/clients/group-middle.png";
// import groupRight from "../../../public/images/clients/group-right.png";
import groupwide from "../../../public/images/clients/group-wide.jpeg";

import Slider from "react-slick";
const Carousel = ({slidesToShow}) => {
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
        <img src={picnic} alt="" />
      </div>
      <div className="carousel-img-container">
        <img src={party} alt="" />
      </div>
      <div className="carousel-img-container">
        <img src={xmas} alt="" />
      </div>
      {/* <div className="carousel-img-container">
        <img src={groupLeft} alt="" />
      </div> */}
      <div className="carousel-img-container">
        <img src={groupwide} alt="" />
      </div>
      {/* <div className="carousel-img-container">
        <img src={groupRight} alt="" />
      </div> */}
    </Slider>
  );
};
export default Carousel;
