import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const testContent =   `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        nesciunt autem mollitia dignissimos tenetur ipsum quam, sed ex iure
        eaque commodi minus eos, laboriosam tempore quaerat temporibus accusamus
        repellat fuga.`
      

const FeatureCard = ({size, icon, title="Title", content=testContent}) => {
  return (
    <div className="mission-card">
      <div className="mission-card__icon-container">
        <FontAwesomeIcon className="mission-card__icon" size={size} icon={icon} />
      </div>
      <h3 className="mission-card__text--title">{title}</h3>
      <p className="mission-card__text--paragraph">
    {content}
      </p>
    </div>
  );
}
export default FeatureCard