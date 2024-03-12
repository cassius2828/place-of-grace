const OurStoryHeroImg = () => {
  return (
    <img
      className="OurStory--img__hero"
      // i was getting a 304 response which meant the image was getting cached and the updated img was
      // not making it to the browser. THis query forces the image to have to be downloaded each time to ensure it does not get cached
      src="/images/our-story-mobile.jpg?v=123456789"
      alt=""
      loading="lazy"
    />
  );
}
export default OurStoryHeroImg

// dist/images/How-Walking-Together-Helps-You-Stay-Together.jpg