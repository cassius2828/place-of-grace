import TextTab from "../../components/Reusables/TextTab";

const ServeStory = () => {
  return (
    <>
      {" "}
      <h1 className="serve--text__title">Who We Serve</h1>
      <hr className="serve--hr__story" />
      <p className="serve--text__story serve--text__story-1">
        <TextTab>Our</TextTab> residents are adults aged 18 to 59 years old who
        come to us through referrals from Regional Centers across the state. Our
        focus is on providing specialized care and support for adults with
        intellectual or developmental disabilities, many of whom face the added
        complexity of dual diagnoses.
      </p>
      <p className="serve--text__story serve--text__story-2">
        <TextTab>We</TextTab> understand that each individual we serve has
        unique needs and challenges. That&apos;s why we take a collaborative
        approach, working closely with case managers, wellness coordinators,
        behavior specialists, therapists, psychiatrists, direct support
        professionals, and other essential providers. As an integral member of
        each resident&apos;s interdisciplinary team, we are dedicated to
        delivering the highest standard of care and support.
      </p>
      <p className="serve--text__story serve--text__story-4">
        Click below to learn more about Regional Center eligibility requirements
      </p>
    </>
  );
};
export default ServeStory;
