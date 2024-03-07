import { BrowserRouter } from "react-router-dom";
import { useGlobalContext } from "./customHooks/useGlobalContext";
import MobileMain from "./layout/Content/MobileContent";
import ScrollToTop from "./components/Reusables/ScrollToTop";


function MobileApp() {
  const { openMobileMenu } = useGlobalContext();
  console.log(location.pathname)


  return (
    <div className={openMobileMenu ? `mobile-app mobile-active` : `mobile-app`}>
      <BrowserRouter>
        <MobileMain />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default MobileApp;
