import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Sento } from "../types/Sento";
import SentoData from "../../SentoPageData.json";

export type SentoDataContextType = {
  //set〇〇は関数だから型のしては1つづつする
  sentoList: Sento[];
  setSentoList: Dispatch<
    SetStateAction<
      {
        id: number;
        imageUrl: string;
        name: string;
        address: string;
        cost: number;
        flag?: boolean;
      }[]
    >
  >;
};

export const SentoDataContext = createContext<SentoDataContextType>(
  {} as SentoDataContextType
);

export const SentoDataProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [sentoList, setSentoList] = useState<Sento[]>(SentoData);
  return (
    <SentoDataContext.Provider value={{ sentoList, setSentoList }}>
      {children}
    </SentoDataContext.Provider>
  );
};
