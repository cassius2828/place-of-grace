import Abby from "/staff/Abby.webp";
import Dye from "/staff/Dye.webp";
import Freddie from "/staff/Freddie.webp";
import TestimonialCard from "./TestimonialCard";
import { RoundedButton } from "../../components/Reusables/Buttons.jsx";
import {Link} from "react-router-dom";


const TestimonialContainer = () => {
  return (
    <div className="testimonial__container">
      {" "}
      <Link to="https://aplaceofgrace.apscareerportal.com/jobs/2100934/apps/new?embed=1">
        <RoundedButton text="current job openings" />
      </Link>
      <TestimonialCard
        name="Abby Lastname"
        image={Abby}
        quote="this is a very insporational quote, so who cares if its spelled write??"
        caption="Super insp right here"
      />
      <TestimonialCard
        name="Abby Lastname"
        image={Dye}
        quote="this is a very insporational quote, so who cares if its spelled write??"
        caption="Super insp right here"
      />
      <TestimonialCard
        name="Abby Lastname"
        image={Freddie}
        quote="this is a very insporational quote, so who cares if its spelled write??"
        caption="Super insp right here"
      />
    </div>
  );
};
export default TestimonialContainer;
