import SignatureCard from "../../components/Reusables/SignatureCard";
import SignatureContainer from "../../layout/SignatureContainer/SignatureContainer";
import HomeHeroImg from "./HomeHeroImg";
import HomepageContainer from "./HomepageContainer";
import HomepageStory from "./HomepageStory";

const Home = () => {
  return (
    <section id="homepage">
      <HomepageContainer side="left">
        <HomepageStory />
        <SignatureContainer className="homepage__signature-container">
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
      </HomepageContainer>

      <HomepageContainer side="right">
        <HomeHeroImg />
      </HomepageContainer>
    </section>
  );
};
export default Home;
