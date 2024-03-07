import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextTab from "../../components/Reusables/TextTab";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

const Mission = () => {
  return (
    <>
      {" "}
      <section id="mission" className="mission">
        <div className="mission-statement-container">
          <h1 className="mission__text--title mission__text--title-1">
            Our Mission
          </h1>
          <p className="mission__text--paragraph">
            <TextTab>P</TextTab>roviding high-quality care and structured
            support for the health and wellness of the Intellectually and
            Developmentally Disabled population by hiring and training caring
            professionals dedicated to compassionate care.
          </p>
        </div>{" "}
        <div className="mission-bg">
          <h1 className="mission__text--title mission__text--title-2">
            Our Values
          </h1>

          <div className="mission-cards-container">
            <FeatureCard
              icon={faHandHoldingHeart}
              size="3x"
              // dont forget title and content
            />{" "}
            <FeatureCard
              icon={faHandHoldingHeart}
              size="3x"
              // dont forget title and content
            />{" "}
            <FeatureCard
              icon={faHandHoldingHeart}
              size="3x"
              // dont forget title and content
            />
          </div>
        </div>
      </section>{" "}
    </>
  );
};
export default Mission;
