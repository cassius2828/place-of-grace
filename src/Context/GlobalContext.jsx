import { createContext, useEffect, useReducer, useRef } from "react";
export const GlobalContext = createContext();
const initialState = {
  openMobileMenu: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleMobileMenu":
      return { ...state, openMobileMenu: !state.openMobileMenu };
    default:
      break;
  }
};

export const GlobalProvider = ({ children }) => {
  const [{ openMobileMenu }, dispatch] = useReducer(reducer, initialState);
  const formRef = useRef();
  // const accordionRefs = useRef([]);

  const handleMobileMenuToggle = () => {
    dispatch({ type: "toggleMobileMenu" });
  };

  // focuses form if user clicks contact us on the contact page
  const handleFormFocus = (pathname) => {
    if (pathname === "/contact") {
      formRef.current.focus();
    }
  };

  const useScreenOrientationLock = () => {
    useEffect(() => {
      // Lock screen orientation to portrait mode when component mounts
      const lockScreenOrientation = () => {
        if (screen.orientation) {
          screen.orientation.lock("portrait");
        }
      };

      lockScreenOrientation();

      // Cleanup function to unlock orientation when component unmounts
      return () => {
        if (screen.orientation) {
          screen.orientation.unlock();
        }
      };
    }, []);
  };

  return (
    <GlobalContext.Provider
      value={{
        openMobileMenu,
        handleMobileMenuToggle,
        handleFormFocus,
        dispatch,
        formRef,
    useScreenOrientationLock,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
