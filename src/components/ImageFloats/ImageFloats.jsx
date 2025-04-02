const picnic = `${import.meta.env.VITE_CDN_PATH}/images/clients/home1.jpg`;
const ParkBench = `${
  import.meta.env.VITE_CDN_PATH
}/images/clients/Park-Bench-Group.jpeg`;
const WaterFight = `${
  import.meta.env.VITE_CDN_PATH
}/images/clients/Rome-Javon-Waterfight.jpeg`;

const ImageFloats = () => {
  return (
    <>
      <div className="composition">
        {/* //* pic with person in yellow; backyard */}
        {/* <img
          src={EstherGroup}
          alt="Photo 1"
          className="composition__photo composition__photo--p1"
          fetchPriority="high"
        /> */}
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
        {/* //* picture with jeff */}
        {/* <img
          src={party}
          alt="Photo 4"
          className="composition__photo composition__photo--p4"
          loading="lazy"
        /> */}
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
