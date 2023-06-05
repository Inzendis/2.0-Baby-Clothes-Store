import React from "react";
import Head from "next/head";
import Link from "next/link";
import imageLogo from "../public/images/tamaitiLogo.png";
import Image from "next/image";

interface AuxProps {
  children: React.ReactNode;
  title: string;
  typeHeaderAndFooter: string;
}

export default function Layout({
  children,
  title,
  typeHeaderAndFooter,
}: AuxProps) {
  let headerType;
  let footerType;
  switch (typeHeaderAndFooter) {
    case "HomePage":
      headerType = "md:logoBgGradient logoMobileBgGradient";
      footerType = "footerContainerGirl";
      break;
    case "boy":
      headerType = "headerContainerBoyBg";
      footerType = "footerContainerBoy";
      break;
    case "girl":
      headerType = "headerContainerGirlBg";
      footerType = "footerContainerGirl";
      break;
  }
  return (
    <>
      <Head>
        <title>{"Tamaiti " + title}</title>
        <meta name="description" content="Tamaiti Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col ">
        <header
          className={`headerContainer ${
            typeHeaderAndFooter !== "HomePage" ? "fixed" : ""
          }`}
        >
          <div className={headerType}></div>
          <nav className={`navContainer`}>
            <div className="flex flex-row  my-4 px-2 md:px-28 justify-between">
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
              <div className="flex flex-row space-x-2">
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
                typeHeaderAndFooter !== "HomePage" ? "hidden" : ""
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
                typeHeaderAndFooter !== "HomePage" ? "hidden" : ""
              } `}
            >
              <a className="text-xl font-bold">Browse Our Products</a>
              <div className="flex flex-col -space-y-4 md:space-y-0 md:flex-row md:space-x-12 mb-4">
                <div className="buttonContainer">
                  <Link
                    href={{
                      pathname: `/productCatalog`,
                      query: { gender: "boy" },
                    }}
                  >
                    <button className="button">
                      <div className="button__line"></div>
                      <div className="button__line"></div>
                      <span className="button__text">Boy</span>
                      <div className="button__drow1"></div>
                      <div className="button__drow2"></div>
                    </button>
                  </Link>
                </div>
                <div className="buttonContainer">
                  <Link
                    href={{
                      pathname: `/productCatalog`,
                      query: { gender: "girl" },
                    }}
                  >
                    <button className="button">
                      <div className="button__line"></div>
                      <div className="button__line"></div>
                      <span className="button__text">Girl</span>
                      <div className="button__drow3"></div>
                      <div className="button__drow4"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className={`${footerType}`}>
          <div className="footerInnerContentsContainer">
            <div className="grid py-4">
              <Link
                href="/"
                className="py-2 justify-self-center md:justify-self-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[30px] lg:w-[24px] h-full"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#1877F2"
                    d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  ></path>
                  <path
                    fill="#FFF"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                  ></path>
                </svg>
              </Link>
              <div className="text-lg justify-between flex flex-col text-center md:text-left md:flex-row space-y-3 lg:space-y-0">
                <ul className="list-none">
                  <li>
                    <Link href="/">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Statement</Link>
                  </li>
                  <li>
                    <Link href="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/">Shipping & Returns</Link>
                  </li>
                  <li>
                    <Link href="/">Terms of Service</Link>
                  </li>
                  <li>
                    <button>Refund policy</button>
                  </li>
                </ul>

                <ul className="list-none text-center md:text-right">
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <li>
                    <a>787-###-####</a>
                  </li>
                  <li>
                    <a>tamaitipr@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
