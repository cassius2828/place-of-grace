import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import defaultProfilePic from "/images/default/default-profile.jpeg";

const HeadshotCard = ({
  iconSize = "lg",
  id,
  img = defaultProfilePic,
  name,
  title,
  level,
  email,
}) => {
  return (
    <div className={level + "-card"}>
      <div id={id} className="staff-card__img-bg">
        {" "}
        <img src={img} alt={name + " the " + title} loading="lazy" />
      </div>

      <div className="name-email-container">
        <h3 className={`${level}-card__text--name`}>{name}</h3>
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon
            size={iconSize}
            className="staff-card__icon"
            icon={faEnvelope}
          />
        </a>
      </div>
      <span className={`${level}-card__text--title`}>{title}</span>
    </div>
  );
};
export default HeadshotCard;
