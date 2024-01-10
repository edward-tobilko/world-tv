import { createContext, useContext } from "react";

import { IContext } from "../models";

export const Context = createContext<IContext>({
  auth: false,
  setAuth: () => {},
});

export const useMyContext = () => useContext(Context);
