import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Oswald } from "next/font/google";
import { ReactElement } from "react";

const oswald = Oswald({
  subsets: ["latin"],
});

interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & {
    getLayout?: (page: ReactElement) => any;
  };
}

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <div className={`${oswald.className}`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
