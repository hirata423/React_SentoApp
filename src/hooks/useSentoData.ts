import { useContext } from "react";
import {
  SentoDataContext,
  SentoDataContextType,
} from "../provider/SentoDataProvider";

export const useSentoData = (): SentoDataContextType =>
  useContext(SentoDataContext);
