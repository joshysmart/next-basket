"use client";

import { store } from "@/redux/app/store";
import { Provider } from "react-redux";

interface IMyStoreProviderProps {
  children: React.ReactNode;
}

const MyStoreProvider = ({ children }: IMyStoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MyStoreProvider;
