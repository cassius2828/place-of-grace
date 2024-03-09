import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy loading components
const Home = lazy(() => import("../../pages/Home/OurStory"));
const Mission = lazy(() => import("../../pages/Mission/Mission"));
const StaffPage = lazy(() => import("../../pages/Staff/StaffPage"));
const Serve = lazy(() => import("../../pages/Serve/Serve"));
const Join = lazy(() => import("../../pages/Join/Join"));
const ContactSection = lazy(() =>
  import("../../components/ContactForm/ContactSection")
);
const LandingPage = lazy(() => import("../../pages/LandingPage/LandingPage"));

// Mapping of page titles to routes
const PageTitles = {
  "/": "A Place of Grace",
  "/our-story": "A Place of Grace | Our Story",
  "/mission": "A Place of Grace | Our Mission",
  "/staff": "A Place of Grace | Staff",
  "/serve": "A Place of Grace | Who We Serve",
  "/careers": "A Place of Grace | Careers",
  "/contact": "A Place of Grace | Contact",
};

const Main = () => {
  // State to manage the document title
  const [tabTitle, setTabTitle] = React.useState(PageTitles[location.pathname]);

  // Update document title when pathname changes
  React.useEffect(() => {
    if (location.pathname !== "/") setTabTitle(PageTitles[location.pathname]);
  }, [location.pathname]);

  // Update document title
  React.useEffect(() => {
    document.title = tabTitle;
  }, [tabTitle]);

  return (
    <main id="mobile-main">
      {/* Suspense for lazy loading */}
      <Suspense
        fallback={
          <div id="suspense">
            <span className="loader"></span>
          </div>
        }
      >
        <Routes>
          {/* Route definitions */}
          {/* i changed this to keep the vite prefix in prod but it isnt working*/}
          <Route index element={<LandingPage />} />
          <Route path="/our-story" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/serve" element={<Serve />} />
          <Route path="/careers" element={<Join />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
