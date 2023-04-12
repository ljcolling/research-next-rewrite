
import Head from 'next/head'
import Link from "next/link";


import { useState, type ReactNode, type Dispatch, type SetStateAction } from "react"

interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className="flex-grow px-5 font-body md:overflow-y-auto bg-gradient-to-b from-white to-gray-100 border border-gray-200 ">
      {children}
    </main>
  )
}


const menuitems = [
  { text: "Research", link: "research" },
  { text: "Publications", link: "publications" },
  { text: "Teaching", link: "teaching" },
  { text: "Blog", link: "http://blog.colling.net.nz" },
]

type menuitem = { text: string, link: string };

type menuprops = {
  menuitems: Array<menuitem>
  display: boolean
  setDisplay: Dispatch<SetStateAction<boolean>>
}


const Menu = ({ menuitems, display, setDisplay }: menuprops) => {
 
  return (
    <div className={`
duration-500 
md:static 
absolute 
bg-white 
md:min-h-fit 
right-2
${display ? "top-[5%]" : "top-[-100%]"}
md:w-auto 
md:shadow-none
shadow
items-center

`}>


 

    <ul className="
        flex 
        md:flex-row
        md:items-center
        md:gap-8
        md:p-0
       md:mx-auto 
      flex-col
       
      " >
      <li className="md:p-0 
          py-2
          px-5
          border">
        <Link href="./" className="menu-item font-semibold"
              onClick={() => setDisplay(false)}
          >Home</Link>
      </li>
      {menuitems.map((value, key) => {
        return (<li key={key} className='md:p-0 py-2 px-5 border'>
          <Link className="menu-item" key={key} href={value.link}
              onClick={() => setDisplay(false)}
            >{value.text}</Link>
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
      <nav className='flex justify-between items-center mx-auto w-[95%]'>
        <div className="z-10">Lincoln <strong>Colling</strong></div>
        <Menu menuitems={menuitems} display={display} setDisplay={setDisplay}
        />
        <div className="flex items-center md:hidden hover:text-blue-500"
          role='button'
          onClick={() => setDisplay(!display)}  
        >Menu</div>
      </nav>
    </header>
  )
}

const Body = ({ children }: Props) => {
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

export default function Layout({ children }: Props) {
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
