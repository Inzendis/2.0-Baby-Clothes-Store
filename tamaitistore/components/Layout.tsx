import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

interface AuxProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({children, title}: AuxProps) {
  return (
    <>
    <Head>
      <title>{"Tamaiti " + title}</title>
      <meta name="description" content="Tamaiti Website"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className='flex items-center px-4 justify-between'>
            <Link href="/" className="text-xl font-bold">
            Tamaiti
            </Link>
            <div className='flex items-center space-x-2'>
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex justify-center items-center'>footer</footer>
      </div>
    </>
  )
}
