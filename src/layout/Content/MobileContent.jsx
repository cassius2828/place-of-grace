import Header from "../Header/Header";
import MobileMain from "../Main/MobileMain";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const MobileContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <div className="mobile-content">
        {isHome ? (
          <MobileMain />
        ) : (
          <>
            <Header /> <MobileMain /> <Footer />
          </>
        )}
      
      </div>
    </>
  );
};
export default MobileContent;
