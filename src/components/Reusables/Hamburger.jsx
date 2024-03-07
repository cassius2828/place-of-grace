import {useGlobalContext} from "../../customHooks/useGlobalContext";

const Hamburger = () => {
  const { handleMobileMenuToggle } = useGlobalContext();
  return <div onClick={handleMobileMenuToggle} id="hamburger"></div>;
};
export default Hamburger;
