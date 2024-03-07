import { useContext } from "react";

import { GlobalContext } from "../Context/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("GlobalContext was used outside the GlobalProvider");
  return context;
};
