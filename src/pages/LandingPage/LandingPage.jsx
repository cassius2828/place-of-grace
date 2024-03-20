import NavListDesktop from "../../components/NavBar/NavListDesktop";

const LandingPage = () => {
  return (
    <section className="landing-page" id="landing-page">
      <div className="hero-bg">
        <h1 className="landing-page__text--title">
          A Place <br />
          of Grace
        </h1>
        <div className="landing-page__nav-container">
          <NavListDesktop className={`landing-page__nav-list`} />
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
