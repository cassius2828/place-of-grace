import { BrowserRouter } from "react-router-dom";
import { useGlobalContext } from "./customHooks/useGlobalContext";

import ScrollToTop from "./components/Reusables/ScrollToTop";
import Content from "./layout/Content/Content";
import ErrorBoundary from "./pages/Errors/ErrorBoundary";

function App() {
  const { openMobileMenu, useScreenOrientationLock } = useGlobalContext();
  useScreenOrientationLock();
  return (
    <div className={openMobileMenu ? `mobile-app mobile-active` : `mobile-app`}>
      <BrowserRouter>
        <ErrorBoundary>
          <Content />
        </ErrorBoundary>
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
