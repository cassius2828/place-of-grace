const VideoOfHills = `${
  import.meta.env.VITE_CDN_PATH
}/videos/formHillsBackground.mp4`;
const VideoOfHillsWebm = `${
  import.meta.env.VITE_CDN_PATH
}/videos/videos/formHillsBackground.webm`;

// import fallbackHills from "/images/wide-images/hillsArielImage.png";
import { useState } from "react";

// const BgVideo = () => {
//   const [isVideoError, setIsVideoError] = useState(false);
//   const handleError = () => {
//     setIsVideoError(true);
//   };
//   return (
//     <div className="bg-video">
//       {isVideoError ? (
//         <img src={fallbackHills} alt="Fallback image of soaring over hills" />
//       ) : (
//         <video
//           onError={handleError}
//           className="bg-video__content"
//           loading="lazy"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src={VideoOfHills} type="video/mp4" />
//           <source src={VideoOfHillsWebm} type="video/webm" />
//         </video>
//       )}
//     </div>
//   );
// };
// export default BgVideo;

const BgVideo = () => {
  const [isVideoError, setIsVideoError] = useState(false);
  const handleError = () => {
    setIsVideoError(true);
  };
  return (
    <div className="bg-video">
      <video
        onError={handleError}
        className="bg-video__content"
        loading="lazy"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VideoOfHills} type="video/mp4" />
        <source src={VideoOfHillsWebm} type="video/webm" />
      </video>
    </div>
  );
};
export default BgVideo;
