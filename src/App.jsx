import { BrowserRouter } from "react-router-dom";
import { useGlobalContext } from "./customHooks/useGlobalContext";

import ScrollToTop from "./components/Reusables/ScrollToTop";
import Content from "./layout/Content/Content";

function App() {
  const { openMobileMenu } = useGlobalContext();
  console.log(location.pathname);

  return (
    <div className={openMobileMenu ? `mobile-app mobile-active` : `mobile-app`}>
      <BrowserRouter>
        <Content />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
