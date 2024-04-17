import party from "/images/clients/home2.png";
import picnic from "/images/clients/home1.jpg";
import xmas from "/images/clients/home3.png";
import ParkBench from "/images/clients/Park-Bench-Group.jpeg";
import WaterFight from "/images/clients/Rome-Javon-Waterfight.jpeg";
import CarGroup from "/images/clients/Car-Group.jpeg";
import EstherGroup from "/images/clients/Esther-Group-House.jpeg";
// import groupLeft from "/images/clients/group-left.png";
// import groupMiddle from "/images/clients/group-middle.png";
// import groupRight from "/images/clients/group-right.png";
import groupwide from "/images/clients/group-wide.jpeg";

const ImageFloats = () => {
  return (
    <>
      <div className="composition">
        <img
          src={EstherGroup}
          alt="Photo 1"
          className="composition__photo composition__photo--p1"
          loading="lazy"
        />
        <img
          src={ParkBench}
          alt="Photo 2"
          className="composition__photo composition__photo--p2"
          loading="lazy"
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
