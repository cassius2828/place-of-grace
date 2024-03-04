import { BrowserRouter } from "react-router-dom";
import MobileNav from "./components/NavBar/MobileNav";
import { useGlobalContext } from "./customHooks/useGlobalContext";
import MobileMain from "./layout/Content/MobileContent";
import Footer from "./layout/Footer/Footer";
import ScrollToTop from "./components/Reusables/ScrollToTop";

function MobileApp() {
  const { openMobileMenu } = useGlobalContext();
  return (
    <div className={openMobileMenu ? `mobile-app mobile-active` : `mobile-app`}>
      <BrowserRouter>
        {" "}
        
        <MobileMain />
       
        <ScrollToTop/>
      </BrowserRouter>
    </div>
  );
}

export default MobileApp;
