import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import TextTab from "../../components/Reusables/TextTab";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ValueCard from "../../components/ValueCard/ValueCard";

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
            <TextTab>T</TextTab>o hire and train caring professionals who
            provide the highest quality care and structured support for the
            health and wellness of the population we serve.
          </p>
        </div>{" "}
        <div className="mission-bg">
          <h1 className="mission__text--title mission__text--title-2">
            Our Values
          </h1>

          <div className="value-cards-container">
            <ValueCard>
              <img src="/images/values/8.svg" alt="" />
            </ValueCard>
            <ValueCard>
              <img src="/images/values/9.svg" alt="" />
            </ValueCard>
            <ValueCard>
              <img src="/images/values/10.svg" alt="" />
            </ValueCard>

            {/* <>
              {" "}
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
            </> */}
          </div>
        </div>
      </section>{" "}
    </>
  );
};
export default Mission;
