import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & {
    getLayout?: (page: ReactElement) => any;
  };
}

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
