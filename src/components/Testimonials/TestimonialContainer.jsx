import TestimonialCard from "./TestimonialCard";
import { RoundedButton } from "../../components/Reusables/Buttons.jsx";
import { Link } from "react-router-dom";

const TestimonialContainer = () => {
  return (
    <div className="testimonial__container">
      {" "}
      <Link to="https://aplaceofgrace.apscareerportal.com/jobs/2100934/apps/new?embed=1">
        <RoundedButton text="current job openings" />
      </Link>
      <TestimonialCard
        name="Current RBT"
        quote="I’ve worked at other homes and this is the 1st home that I can truly say that every staff has the love for this field and clients come first. Place of Grace also gives those interested for advancement room to grow. Admins are always there for their employees. And HR is always there when needed. It’s just a great place to work."
        caption="Empowering staff, prioritizing clients—Place of Grace excels"
      />
      <TestimonialCard
        name="Current DSP"
        quote="I have been working in this field for 5 years and by far this is the best facility I have been able to work for and I am looking forward to my growth with this company."
        caption="Top facility with promising growth"
      />
      <TestimonialCard
        name="Current RBT"
        quote="I enjoy the work environment, very warm and welcoming, staff actually work as a team. It’s effortlessly done, everyone helps everyone. The leads on shift are super helpful and knowledgeable, the Administrators are encouraging and supportive of their staff. I honestly have not one bad thing to say about this company. I look forward to moving up the corporate ladder and growing with the company and really making a difference in the lives of the population we serve. It’s truly heartwarming knowing I make a difference."
        caption="Supportive, team-driven workplace focused on impactful growth"
      />
    </div>
  );
};
export default TestimonialContainer;
