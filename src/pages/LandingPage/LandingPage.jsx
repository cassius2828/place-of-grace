import { useState } from "react";
import NavListDesktop from "../../components/NavBar/NavListDesktop";


const LandingPage = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(true);
  };
  const handleHideNav = () => {
    setShowNav(false);
  };


  return (
    <section className="landing-page" id="landing-page">
      <div className="hero-bg">
        <h1 className="landing-page__text--title">
          A Place <br />
          of Grace
        </h1>
        <div
          onMouseEnter={handleShowNav}
          onMouseLeave={handleHideNav}
          className="landing-page__nav-container"
        >
         {showNav ? 
         <NavListDesktop className={`landing-page__nav-list`}/> 
         : 'Learn About Us'}
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
