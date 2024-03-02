import {Link} from "react-router-dom";

const Logo = ({ imageUrl, logoNum}) => {
  console.log(logoNum)
  return (
  <Link to={`/`}>  <img
        alt=""
        src={imageUrl}
      
    
        id={`logo-${logoNum}`}
      /></Link>
    
    
  );
};
export default Logo;
