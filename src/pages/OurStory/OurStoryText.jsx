import TextTab from "../../components/Reusables/TextTab";

const OurStoryText = () => {
  return (
    <>

      <h1 className="OurStory--text__title">Our Story</h1>
      <hr className="OurStory--hr__story" />
      <p className="OurStory--text__story OurStory--text__story-1">
        <TextTab>Founded </TextTab> in 2002 by David and Sally Price, A Place Of
        Grace emerged from a shared desire to support underserved members of the
        community. Recognizing the critical need for housing and care for adults
        with developmental disabilities, they set out to create a supportive
        environment that would truly make a difference. Drawing from David's
        extensive law enforcement background and Sally's doctoral expertise in
        education, they established the framework for a thriving home where
        residents are equipped with the necessary tools, support, and resources
        to lead independent and fulfilling lives.
      </p>
      <p className="OurStory--text__story OurStory--text__story-2">
        <TextTab>As </TextTab>the need for our services grew, we opened several
        more homes locally and expanded our reach to San Diego County in 2010.
        Guided by principles of inclusivity, respect, and compassion, our team
        remains dedicated to fostering a nurturing environment where each
        resident's unique needs and goals are recognized and supported. At A
        Place Of Grace, we envision a world where all people, regardless of
        background or ability, know they are created in the image of God and
        deserve to be loved.
      </p>
    </>
  );
};
export default OurStoryText;
