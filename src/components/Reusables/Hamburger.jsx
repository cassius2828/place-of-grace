import { useGlobalContext } from "../../../../../pog/place-of-grace-landing-pg-copy/src/customHooks/useGlobalContext";

const Hamburger = () => {
  const { handleMobileMenuToggle } = useGlobalContext();
  return <div onClick={handleMobileMenuToggle} id="hamburger"></div>;
};
export default Hamburger;
