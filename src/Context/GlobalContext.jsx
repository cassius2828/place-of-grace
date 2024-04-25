import { createContext, useReducer, useRef } from "react";
export const GlobalContext = createContext();
const initialState = {
  openMobileMenu: false,
  successSubmission: false,
  failedSubmission: false,
  isFormLoading: false,
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
    case "formIsLoading":
      return { ...state, isFormLoading: true };
    case "formDoneLoading":
      return { ...state, isFormLoading: false };
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
  const handleFormIsLoading = () => {
    dispatch({ type: "formIsLoading" });
  };
  const handleFormDoneLoading = () => {
    dispatch({ type: "formDoneLoading" });
  };

  // focuses form if user clicks contact us on the contact page
  const handleFormFocus = (pathname) => {
    if (pathname === "/contact") {
      formRef.current.focus();
    }
  };

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
        handleFormIsLoading,
        handleFormDoneLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
