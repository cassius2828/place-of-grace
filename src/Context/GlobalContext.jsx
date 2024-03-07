import { createContext, useReducer } from "react";
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

  const handleMobileMenuToggle = () => {
    dispatch({ type: "toggleMobileMenu" });
  };

  return (
    <GlobalContext.Provider
      value={{ openMobileMenu, handleMobileMenuToggle, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
