const OurStoryHeroImg = () => {
  return (
    <img
      className="OurStory--img__hero"
      // * no longer need the query at the end, new image did not have cache issue
      // i was getting a 304 response which meant the image was getting cached and the updated img was
      // not making it to the browser. THis query forces the image to have to be downloaded each time to ensure it does not get cached
      src="/images/newImages/Dave_Sally_Our_Story.webp"
      alt=""
      loading="lazy"
    />
  );
};
export default OurStoryHeroImg;
