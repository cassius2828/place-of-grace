
import Abby from "../../../public/staff/Abby.webp";
import Dye from "../../../public/staff/Dye.webp";
import Freddie from "../../../public/staff/Freddie.webp";
import TestimonialCard from "./TestimonialCard";
import { RoundedButton } from "../../components/Reusables/Buttons.jsx";


const TestimonialContainer = () => {
  return (
    <div className="testimonial__container">
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
      <RoundedButton
        src="https://aplaceofgrace.apscareerportal.com/jobs/2100934/apps/new?embed=1"
        text="join"
      />
    </div>
  );
}
export default TestimonialContainer;