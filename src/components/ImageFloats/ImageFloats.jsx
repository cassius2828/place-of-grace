import party from "/images/clients/home2.png";
import picnic from "/images/clients/home1.jpg";
import ParkBench from "/images/clients/Park-Bench-Group.jpeg";
import WaterFight from "/images/clients/Rome-Javon-Waterfight.jpeg";
import EstherGroup from "/images/clients/Esther-Group-House.jpeg";

const ImageFloats = () => {
  return (
    <>
      <div className="composition">
        <img
          src={EstherGroup}
          alt="Photo 1"
          className="composition__photo composition__photo--p1"
          fetchPriority="high"
        />
        <img
          src={ParkBench}
          alt="Photo 2"
          className="composition__photo composition__photo--p2"
          fetchPriority="high"
        />
        <img
          src={WaterFight}
          alt="Photo 3"
          className="composition__photo composition__photo--p3"
          loading="lazy"
        />
        <img
          src={party}
          alt="Photo 4"
          className="composition__photo composition__photo--p4"
          loading="lazy"
        />
        <img
          src={picnic}
          alt="Photo 5"
          className="composition__photo composition__photo--p5"
          loading="lazy"
        />
      </div>{" "}
    </>
  );
};
export default ImageFloats;
