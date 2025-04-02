const OurStoryHeroImg = () => {
  const cdn = import.meta.env.VITE_CDN_PATH;
  const imagePath = "/images/newImages/Dave_Sally_Our_Story.webp";

  return (
    <img
      className="OurStory--img__hero"
      src={`${cdn}${imagePath}?nf_resize=fit&w=800`}
      srcSet={`
        ${cdn}${imagePath}?nf_resize=fit&w=350 350w,
        ${cdn}${imagePath}?nf_resize=fit&w=425 425w,
        ${cdn}${imagePath}?nf_resize=fit&w=500 500w,
        ${cdn}${imagePath}?nf_resize=fit&w=800 800w
      `}
      sizes="(max-width: 350px) 350px,
             (max-width: 425px) 425px,
             (max-width: 500px) 500px,
             800px"
      alt=""
      fetchPriority="high"
    />
  );
};

export default OurStoryHeroImg;