import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy loading components
const Home = lazy(() => import("../../pages/OurStory/OurStory"));
const Mission = lazy(() => import("../../pages/Mission/Mission"));
const StaffPage = lazy(() => import("../../pages/Staff/StaffPage"));
const Serve = lazy(() => import("../../pages/Serve/Serve"));
const Careers = lazy(() => import("../../pages/Careers/Careers"));
const ContactSection = lazy(() =>
  import("../../components/ContactForm/ContactSection")
);
const LandingPage = lazy(() => import("../../pages/LandingPage/LandingPage"));
const Error = lazy(() => import("../../pages/Errors/Error"));

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
  const [tabTitle, setTabTitle] = useState(PageTitles[location.pathname]);

  // Update document title when pathname changes
  useEffect(() => {
    if (location.pathname !== "/") setTabTitle(PageTitles[location.pathname]);
  }, [location.pathname]);

  // Update document title
  useEffect(() => {
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route
            path="*"
            element={
              <Error
                errorType="404"
                firstMessage={`Sorry, we can not find the requested page`}
                secondMessage={`Please choose a different path`}
              />
            }
          />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
