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
        <SignatureContainer className="OurStory__signature-container">
          <SignatureCard
            side="left"
            imageUrl="/images/360_F_429547_YJTlwk2Ld5kYDAbtCUwFgzmatgUHEg.jpg"
            alt="john doe's signature"
            name="John Doe"
            jobTitle="Co-Founder | CEO"
          />{" "}
          <SignatureCard
            side="right"
            imageUrl="/images/fake-hand-drawn-autographs-set-260nw-2295145277.webp"
            alt="Jane doe's signature"
            name="Jane Doe"
            jobTitle="Co-Founder | CEO"
          />
        </SignatureContainer>
      </OurStoryContainer>

      <OurStoryContainer side="right">
        <OurStoryHeroImg />
      </OurStoryContainer>
    </section>
  );
};
export default OurStory;
