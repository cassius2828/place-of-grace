
import Dave from "../../../public/bosses/Dave.webp";
import Sally from "../../../public/bosses/Sally.webp";
import HeadshotCard from "../../components/HeadshotCard/HeadshotCard";

const BossCardContainer = () => {
  return (
    <div className="staff__meetstaff--boss-container">
      <HeadshotCard
        img={Dave}
        name="David Price"
        title="CEO"
        level="boss"
        email="David.Price@placeofgrace.net"
      />
      <HeadshotCard
        img={Sally}
        name="Sally Price"
        title="Vice President"
        level="boss"
        email="Sally.Price@placeofgrace.net"
      />
    </div>
  );
};
export default BossCardContainer;
