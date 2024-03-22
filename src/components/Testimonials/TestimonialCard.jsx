import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import TextTab from "../Reusables/TextTab";
const TestimonialCard = ({image, name, caption, quote=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
ipsum sapiente aspernatur libero repellat quis consequatur ducimus
quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
aspernatur libero repellat quis consequatur ducimus quam nisi
exercitationem omnis earum qui.`}) => {
  return (
    <div className="testimonial__card">
      {/* <figure className="testimonial__shape">
        <img
          src={image}
          alt={name + `'s testimonial`}
          className="testimonial__img"
          loading="lazy"
        />
        <figcaption className="testimonial__caption">{name}</figcaption>
      </figure> */}
      <div className="testimonial__text">
        <FontAwesomeIcon
          className="testimonial__icon"
          size="3x"
          icon={faQuoteLeft}
        />
        <h3
          style={{ fontWeight: "800", textTransform: 'capitalize' }}
          className="testimonial__text--caption"
        >
      {caption}
        </h3>
        <p className="testimonial__text--quote">
         {quote}
        </p><span
          style={{ fontWeight: "800", textTransform: 'capitalize' }}
        
        ><TextTab>&#8212;</TextTab> {name}</span>
      </div>
    </div>
  );
};
export default TestimonialCard;
