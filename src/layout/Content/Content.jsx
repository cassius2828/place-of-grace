import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import MobileNav from "../../components/NavBar/MobileNav";
import Main from "../Main/Main";
import { useGlobalContext } from "../../customHooks/useGlobalContext";

const Content = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div
 
        className="mobile-content"
      >
        {isHome ? (
          <Main />
        ) : (
          <>
            <MobileNav /> <Header /> <Main /> <Footer />
          </>
        )}
      </div>
    </>
  );
};
export default Content;
