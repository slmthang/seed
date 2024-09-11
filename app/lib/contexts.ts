
import { useContext, createContext } from "react";

export const curPathContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>([null!, () => null!]);