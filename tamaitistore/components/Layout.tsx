import React from "react";
import Head from "next/head";
import Link from "next/link";
import imageLogo from "../public/images/tamaitiLogo.png";
import Image from "next/image";
interface AuxProps {
  children: React.ReactNode;
  title: string;
  colourHeader: string;
  typeHeader: string;
}

export default function Layout({
  children,
  title,
  colourHeader,
  typeHeader,
}: AuxProps) {
  return (
    <>
      <Head>
        <title>{"Tamaiti " + title}</title>
        <meta name="description" content="Tamaiti Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col justify-between">
        <header
          className={`top-0 right-0 left-0  z-10 flex items-center justify-between ${
            typeHeader === "HomePage" ? "logoBgGradient" : "fixed"
          }`}
        >
          <nav className="flex flex-col w-full">
            <div className="flex flex-row  mt-2 px-2 md:px-28 justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"
                ></path>
              </svg>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              className={`flex justify-center ${
                typeHeader !== "HomePage" ? "hidden" : ""
              } `}
            >
              <Image
                width={400}
                height={330}
                src={imageLogo}
                alt="Main Logo Big"
              ></Image>
            </div>
            <div
              className={`flex flex-col items-center ${
                typeHeader !== "HomePage" ? "hidden" : ""
              } `}
            >
              <a>Browse Our Products</a>
              <div className="flex flex-row md:space-x-12 mb-4">
                <div className="buttonContainer">
                  <a href="#" className="button">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text">Boy</span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                  </a>
                </div>
                <div className="buttonContainer">
                  <a href="#" className="button">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text">Girl</span>
                    <div className="button__drow3"></div>
                    <div className="button__drow4"></div>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="flex justify-center items-center">footer</footer>
      </div>
    </>
  );
}
