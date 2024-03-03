import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../../pages/Home/OurStory";
import Mission from "../../pages/Mission/Mission";
import StaffPage from "../../pages/Staff/StaffPage";
import Serve from "../../pages/Serve/Serve";
import Join from "../../pages/Join/Join";
import ContactForm from "../../components/ContactForm/ContactForm";
import LandingPage from "../../pages/LandingPage/LandingPage";


const MobileMain = () => {
  return (
    <main id="mobile-main">
      {" "}
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="our_story" element={<Home />} />
        <Route path="mission" element={<Mission />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="serve" element={<Serve />} />
        <Route path="careers" element={<Join />} />
        <Route path="contact" element={<ContactForm />} />
      </Routes>
    </main>
  );
};
export default MobileMain;
