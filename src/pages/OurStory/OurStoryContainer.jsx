const OurStoryContainer = ({ side, children }) => {
  return <div className={`OurStory OurStory-${side}`}>{children}</div>;
};
export default OurStoryContainer;
