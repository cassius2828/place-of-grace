import Abby from "/staff/Abby.webp";
import Dye from "/staff/Dye.webp";
import Freddie from "/staff/Freddie.webp";
import TestimonialCard from "./TestimonialCard";
import { RoundedButton } from "../../components/Reusables/Buttons.jsx";

const TestimonialContainer = () => {
  return (
    <div className="testimonial__container">
      {" "}
      <RoundedButton
      newTab={true}
        src="https://aplaceofgrace.apscareerportal.com/jobs/2100934/apps/new?embed=1"
        text="current job openings"
      />
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
