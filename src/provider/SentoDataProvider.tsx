import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Sento } from "../types/Sento";

export type SentoDataContextType = {
  checkData: boolean;
  setCheckData: Dispatch<SetStateAction<boolean>>;
  // checkColor: string | "gray.400";
  // setCheckColor: Dispatch<SetStateAction<string | "gray.400">>;
};

export const SentoDataContext = createContext<SentoDataContextType>(
  {} as SentoDataContextType
);

export const SentoDataProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [checkData, setCheckData] = useState<boolean>(false);
  // const [checkColor, setCheckColor] = useState<string | "gray.400">("gray.400");
  return (
    <SentoDataContext.Provider value={{ checkData, setCheckData }}>
      {children}
    </SentoDataContext.Provider>
  );
};
