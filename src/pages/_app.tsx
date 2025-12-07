import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Head from 'next/head'

import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Analytics/>
        <Head>
          <title>Harikrishna Vardhineedi | Quantum Computing Researcher</title>
          
          <link rel="icon" type="image/png" href="DarkLogo.png" />
          <meta name="description" content="Researcher building structural principles for quantum computing." />
        </Head>
        <Component {...pageProps} />
    </>
  );
}
