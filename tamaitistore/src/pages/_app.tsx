import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/homePage.css";
import "@/styles/productCarouselV2.css";
import "@/styles/genderCatalogButton.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
