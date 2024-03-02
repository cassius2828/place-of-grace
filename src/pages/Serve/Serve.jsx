import SignatureCard from "../../components/Reusables/SignatureCard";
import SignatureContainer from "../../layout/SignatureContainer/SignatureContainer";
import ServeContainer from "./ServeContainer";
import ServeStory from "./ServeStory";
import nbrc from "/images/nbrc.png";
import sdrc from "/images/sdrc.jpg";
import Carousel from "../../components/Reusables/Carousel";
import ImageFloats from "../../components/ImageFloats/ImageFloats";

const Serve = () => {
  return (
    <section id="serve">
      <ServeContainer side="left">
        <ServeStory />
        <SignatureContainer className="serve__signature-container">
          <SignatureCard
            side="left"
            imageUrl={nbrc}
            alt="North Bay Regional Center Logo"
          />{" "}
          <SignatureCard
            side="right"
            imageUrl={sdrc}
            alt="San Diego Regional Center Logo"
          />
        </SignatureContainer>
      </ServeContainer>

      <ServeContainer side="right">
        <Carousel slidesToShow={1} />
        <ImageFloats />
      </ServeContainer>
    </section>
  );
};
export default Serve;
