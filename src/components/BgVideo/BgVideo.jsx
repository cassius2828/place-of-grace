import VideoOfHills from "/videos/708884_Faial Island Azores Landscape Scenery_By_Paride_Musci_Artlist_HD.mp4";
const BgVideo = () => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" loading="lazy" autoPlay muted loop>
        <source src={VideoOfHills} type="video/webm" />
      </video>
    </div>
  );
};
export default BgVideo;
