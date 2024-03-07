import SignatureContainer from "../../layout/SignatureContainer/SignatureContainer";
import ServeContainer from "./ServeContainer";
import ServeStory from "./ServeStory";
import Carousel from "../../components/Reusables/Carousel";
import ImageFloats from "../../components/ImageFloats/ImageFloats";

import {RoundedButton} from "../../components/Reusables/Buttons";
import { NavLink } from "react-router-dom";


const Serve = () => {
  return (
    <section id="serve">
      <ServeContainer side="left">
        <ServeStory />
        <SignatureContainer isBar={true} className="serve__signature-container">
          <NavLink to={"https://nbrc.net/client-services/eligibility/"}>
            <RoundedButton text={`north bay regional center`} />
          </NavLink>
          <NavLink to={`https://www.sdrc.org/eligible`}>
            <RoundedButton text={`san diego regional center`} />
          </NavLink>
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
