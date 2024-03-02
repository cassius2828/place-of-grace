const TestimonialCard = ({image, name, caption, quote}) => {
  return (
    <div className="testimonial__card">
      {/* <figure className="testimonial__shape">
        <img
          src={image}
          alt={name + `'s testimonial`}
          className="testimonial__img"
        />
        <figcaption className="testimonial__caption">{name}</figcaption>
      </figure> */}
      <div className="testimonial__text">
        <h3 className="testimonial__text--caption">
          I had the best week ever with my family
        </h3>
        <p className="testimonial__text--quote">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
          aspernatur libero repellat quis consequatur ducimus quam nisi
          exercitationem omnis earum qui.
        </p>
      </div>
    </div>
  );
};
export default TestimonialCard;
