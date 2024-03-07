
import Dave from "/bosses/Dave.webp";
import Sally from "/bosses/Sally.webp";
import HeadshotCard from "../../components/HeadshotCard/HeadshotCard";

const BossCardContainer = () => {
  return (
    <div className="staff__meetstaff--boss-container">
      <HeadshotCard
        id="david-price"
        img={Dave}
        name="David Price"
        title="CEO"
        level="boss"
        email="David.Price@placeofgrace.net"
        iconSize="xl"
      />
      <HeadshotCard
        id="sally-price"
        img={Sally}
        name="Sally Price"
        title="Vice President"
        level="boss"
        email="Sally.Price@placeofgrace.net"
        iconSize="xl"
      />
    </div>
  );
};
export default BossCardContainer;
