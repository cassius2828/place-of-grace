import picnic from "/images/clients/home2.png";
import party from "/images/clients/home1.jpg";
import xmas from "/images/clients/home3.png";

const ImageFloats = () => {
  return (
    <>
      <div className="composition">
        <img
          src={picnic}
          alt="Photo 1"
          className="composition__photo composition__photo--p1"
          loading="lazy"
        />
        <img
          src={party}
          alt="Photo 2"
          className="composition__photo composition__photo--p2"
          loading="lazy"
        />
        <img
          src={xmas}
          alt="Photo 3"
          className="composition__photo composition__photo--p3"
          loading="lazy"
        />
      </div>{" "}
    </>
  );
};
export default ImageFloats;
