import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HeadshotCard = ({ img, name, title, level, email }) => {
  return (
    <div className={level + "-card"}>
      <img src={img} alt={name + " the " + title} />
      <div className="name-email-container">
        <h3 className={`${level}-card__text--name`}>{name}</h3>
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon
            size="lg"
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
