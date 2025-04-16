const picnic = `${import.meta.env.VITE_CDN_PATH}/images/clients/home1.jpg`;
const SpringAndClientCrafts = `${
  import.meta.env.VITE_CDN_PATH
}/images/clients/Spring-and-Client-Crafts.webp`;
const laCruzOriginal = `${
  import.meta.env.VITE_CDN_PATH
}/images/clients/la-cruz-original.jpeg`;

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
        <img
          src={laCruzOriginal}
          alt="La Cruz clients standing together on a creek bridge smiling and enjoying the afternoon."
          className="composition__photo composition__photo--p1"
          fetchPriority="high"
        />
        <img
          src={ParkBench}
          alt="Picnic event of our clientele enjoying the food and nature"
          className="composition__photo composition__photo--p2"
          fetchPriority="high"
        />
        <img
          src={WaterFight}
          alt="Water fight between Administrator Roman Price and clientele"
          className="composition__photo composition__photo--p3"
          loading="lazy"
        />
        {/* //* picture with jeff */}
        <img
          src={SpringAndClientCrafts}
          alt="Administrator Spring doing arts and crafts with clientele"
          className="composition__photo composition__photo--p4"
          loading="lazy"
        />
        <img
          src={picnic}
          alt="A party at one of our locations features staff and clientele"
          className="composition__photo composition__photo--p5"
          loading="lazy"
        />
      </div>{" "}
    </>
  );
};
export default ImageFloats;
