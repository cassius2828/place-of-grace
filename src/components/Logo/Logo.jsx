import { Link } from "react-router-dom";
import { useGlobalContext } from "../../customHooks/useGlobalContext";

const Logo = ({ imageUrl, logoNum }) => {
  const { openMobileMenu } = useGlobalContext();

  return (
    <>
      {openMobileMenu ? (
        <img alt="" src={imageUrl} id={`logo-${logoNum}`} loading="lazy" />
      ) : (
        <Link to={`/`}>
          {" "}
          <img alt="" src={imageUrl} id={`logo-${logoNum}`} loading="lazy" />
        </Link>
      )}
    </>
  );
};
export default Logo;
