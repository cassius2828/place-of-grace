import Header from "../Header/Header";
import MobileMain from "../Main/MobileMain";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import MobileNav from "../../components/NavBar/MobileNav";

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
            <MobileNav /> <Header /> <MobileMain /> <Footer />
          </>
        )}
      </div>
    </>
  );
};
export default MobileContent;
