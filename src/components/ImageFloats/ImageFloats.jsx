import picnic from "../../../public/images/clients/home2.png";
import party from "../../../public/images/clients/home1.jpg";
import xmas from "../../../public/images/clients/home3.png";

const ImageFloats = () => {
  return (
    <>
      <div className="composition">
        <img
          src={picnic}
          alt="Photo 1"
          className="composition__photo composition__photo--p1"
        />
        <img
          src={party}
          alt="Photo 2"
          className="composition__photo composition__photo--p2"
        />
        <img
          src={xmas}
          alt="Photo 3"
          className="composition__photo composition__photo--p3"
        />
      </div>{" "}
    </>
  );
};
export default ImageFloats;
