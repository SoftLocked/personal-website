import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Analytics/>
        <Component {...pageProps} />
    </>
  );
}
