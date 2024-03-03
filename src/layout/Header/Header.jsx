import Logo from "../../components/Logo/Logo";
import NavListDesktop from "../../components/NavBar/NavListDesktop";

const Header = () => {


  return (
    <>
      <header id="header">
        <Logo logoNum="1" imageUrl="https://placeofgrace.net/NewPoGLogo.svg" />
        <NavListDesktop className={`navbar-list--desktop`} />
      </header>
      ;
    </>
  );
};
export default Header;
