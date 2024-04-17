import { createContext, useEffect, useReducer, useRef } from "react";
export const GlobalContext = createContext();
const initialState = {
  openMobileMenu: false,
  successSubmission: false,
  failedSubmission: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleMobileMenu":
      return { ...state, openMobileMenu: !state.openMobileMenu };
    case "successSubmissionTrue":
      return { ...state, successSubmission: true };
    case "successSubmissionFalse":
      return { ...state, successSubmission: false };
    case "failedSubmissionTrue":
      return { ...state, failedSubmission: true };
    case "failedSubmissionFalse":
      return { ...state, failedSubmission: false };
    default:
      break;
  }
};

export const GlobalProvider = ({ children }) => {
  const [{ openMobileMenu, successSubmission, failedSubmission }, dispatch] =
    useReducer(reducer, initialState);
  const formRef = useRef();
  // const accordionRefs = useRef([]);

  const handleMobileMenuToggle = () => {
    dispatch({ type: "toggleMobileMenu" });
  };
  const handleShowSuccessMessage = () => {
    dispatch({ type: "successSubmissionTrue" });
  };
  const handleHideSuccessMessage = () => {
    dispatch({ type: "successSubmissionFalse" });
  };
  const handleShowFailedMessage = () => {
    dispatch({ type: "failedSubmissionTrue" });
  };
  const handleHideFailedMessage = () => {
    dispatch({ type: "failedSubmissionFalse" });
  };

  // focuses form if user clicks contact us on the contact page
  const handleFormFocus = (pathname) => {
    if (pathname === "/contact") {
      formRef.current.focus();
    }
  };

  // const useScreenOrientationLock = () => {
  //   useEffect(() => {
  //     // Lock screen orientation to portrait mode when component mounts
  //     const lockScreenOrientation = () => {
  //       if (screen.orientation) {
  //         screen.orientation.lock("portrait");
  //       }
  //     };

  //     lockScreenOrientation();

  //     // Cleanup function to unlock orientation when component unmounts
  //     return () => {
  //       if (screen.orientation) {
  //         screen.orientation.unlock();
  //       }
  //     };
  //   }, []);
  // };

  return (
    <GlobalContext.Provider
      value={{
        openMobileMenu,
        handleMobileMenuToggle,
        handleFormFocus,
        dispatch,
        formRef,
        successSubmission,
        handleShowSuccessMessage,
        handleHideSuccessMessage,
        failedSubmission,
        handleShowFailedMessage,
        handleHideFailedMessage,
        // useScreenOrientationLock,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
