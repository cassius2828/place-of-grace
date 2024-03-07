import { useContext } from "react";

import { DocumentContext } from "../Context/DocumentContext";

export const useDocumentContext = () => {
  const context = useContext(DocumentContext);
  if (context === undefined)
    throw new Error("GlobalContext was used outside the DocumentContext");
  return context;
};
