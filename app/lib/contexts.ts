
import { createContext } from "react";
import { AppDataType } from "./definitions";

export const AppDataContext = createContext<[AppDataType, React.Dispatch<React.SetStateAction<boolean>>]>([null!, () => null!]);