import Head from 'next/head'
import Link from "next/link";


import { useState, type ReactNode, type Dispatch, type SetStateAction } from "react"


const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex-grow px-5 font-body md:overflow-y-auto bg-gradient-to-b from-white to-gray-100 border border-gray-200 ">
      {children}
    </main>
  )
}


const menuitems: Array<{ text: string, link: string }> = [
  { text: "Research", link: "research" },
  { text: "Publications", link: "publications" },
  { text: "Teaching", link: "teaching" },
  { text: "Blog", link: "http://blog.colling.net.nz" },
]



const Menu = ({ items }: {
  items: typeof menuitems
}) => {

  return (
    <div className="md:static md:min-h-fit md:w-auto">
      <ul className="flex md:flex-row flex-col md:items-center md:gap-8 md:p-0 md:mx-auto " >
        <li className="md:p-0 py-2">
          <Link href="./" className="font-semibold">Home</Link>
        </li>
        {items.map((value, key) => {
          return (<li key={key} className="md:p-0 pt-2 ">
            <Link className="" key={key} href={value.link}>{value.text}</Link>
          </li>)
        })
        }
      </ul>
    </div>

  )


}

const Navbar = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <header className="shadow p-5">
      <nav className=''>
        <div className='flex md:flex-row flex-col mx-auto max-auto md:justify-between justify-center'>
          <div className='flex-col'>
          <div className='flex flex-row pb-5 md:pb-0'>
          <div className="md:block md:relative absolute">Lincoln <strong>Colling</strong></div>
          <button className="md:hidden hover:text-blue-500 absolute md:relative right-5" role='button' onClick={() => setDisplay(!display)} >=</button>
          </div>
          </div>
        <div>
            { display ? null :
          <div className='pt-2 md:pt-0'>
            <Menu items={menuitems} />
          </div>
              }
          </div>
        </div>
      </nav>
    </header>
  )
}

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex bg-gray-100 h-full max-w-full">
      <div className="container flex flex-col bg-white h-full max-w-4xl mx-auto min-h-screen">
        {children}
      </div>
    </div>
  )
}


const Footer = () => {
  return (
    <footer className="text-xs py-2 px-2 font-light bg-gray-100 border border-gray-200 text-center">
      Copyright 2023, Lincoln Colling
    </footer>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (<>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons/css/academicons.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
        integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
        crossOrigin="anonymous"
      />
      <title>Lincoln Colling</title>
      <meta name="description" content="Lincoln Colling Research Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Body>
      <Navbar />
      <Main>
        {children}
      </Main>
      <Footer />
    </Body>
  </>
  )
} 
