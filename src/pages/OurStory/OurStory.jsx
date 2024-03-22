import SignatureCard from "../../components/Reusables/SignatureCard";
import SignatureContainer from "../../layout/SignatureContainer/SignatureContainer";
import OurStoryHeroImg from "./OurStoryHeroImg";
import OurStoryContainer from "./OurStoryContainer";
import OurStoryText from "./OurStoryText";

/*
Home --> OurStory
ourstory --> 

*/


const OurStory = () => {
  return (
    <section id="our-story">
      <OurStoryContainer side="left">
        <OurStoryText />
      </OurStoryContainer>

      <OurStoryContainer side="right">
        <OurStoryHeroImg />
      </OurStoryContainer>
    </section>
  );
};
export default OurStory;
