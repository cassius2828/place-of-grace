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
  // adds a new ref to the current property's array
  // const addAccordionRef = (el) => {
  //   if (accordionRefs.current.length > 3) return;
  //   if (el && !accordionRefs.current.includes(el)) {
  //     accordionRefs.current.push(el);
  //     console.log(accordionRefs)
  //   }
  //   //   refs.current.map(elem => {
  //   //   if(elem.includes(el)) return
  //   //  })
  // };

  // focuses form if user clicks contact us on the contact page
  const handleFormFocus = (pathname) => {
    if (pathname === "/contact") {
      formRef.current.focus();
    }
  };

  // focuses form if user clicks contact us on the contact page
  // const handleAccordianItemFocus = (id, ref) => {
  //   ref.current.map((item, index) => {
  //     if (item.id === id) {
  //       ref.current[index].focus();
  //     }
  //   });
  // };

  return (
    <GlobalContext.Provider
      value={{
        openMobileMenu,
        handleMobileMenuToggle,
        handleFormFocus,
        // handleAccordianItemFocus,
        dispatch,
        // addAccordionRef,
        formRef,
        // accordionRefs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
