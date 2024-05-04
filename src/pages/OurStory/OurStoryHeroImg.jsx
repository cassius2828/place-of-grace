const OurStoryHeroImg = () => {
  return (
<img
  className="OurStory--img__hero"
  src="https://placeofgrace.net/images/newImages/Dave_Sally_Our_Story.webp?nf_resize=fit&w=800"
  srcSet="https://placeofgrace.net/images/newImages/Dave_Sally_Our_Story.webp?nf_resize=fit&w=350 350w,
          https://placeofgrace.net/images/newImages/Dave_Sally_Our_Story.webp?nf_resize=fit&w=425 425w,
          https://placeofgrace.net/images/newImages/Dave_Sally_Our_Story.webp?nf_resize=fit&w=500 500w,
          https://placeofgrace.net/images/newImages/Dave_Sally_Our_Story.webp?nf_resize=fit&w=800 800w"
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
