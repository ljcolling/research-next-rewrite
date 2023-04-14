import Head from 'next/head'
import NextLink from "next/link";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, type ReactNode, type Dispatch, type SetStateAction } from "react"
import { useRouter } from 'next/router';



const Main = ({ children }: { children: ReactNode }) => {

  return (<main className=' bg-gradient-to-b from-white to-gray-100
      flex-grow px-5 font-body 
      md:overflow-y-auto 
border border-gray-200'>
    {children}
  </main>
  )

}


const menuitems: Array<{ text: string, link: string }> = [
  { text: "Home", link: "/" },
  { text: "Research", link: "/research" },
  { text: "Publications", link: "/publications" },
  { text: "Teaching", link: "/teaching" },
  { text: "Blog", link: "http://blog.colling.net.nz" },
]


const Body = ({ open, children }: { open: boolean; children: ReactNode }) => {
  return (
    <div className={`container flex 
${!open ? "bg-gray-800" : "bg-gray-100" }
h-full max-w-full`}>
      <div className="container flex flex-col bg-white h-full max-w-4xl mx-auto min-h-screen">
        {children}
      </div>
    </div>
  )
}


const Footer = ()=> {

  return (
    <footer className=" text-xs py-2 px-2 font-light bg-gray-100 border border-gray-200 text-center">
      Copyright 2023, Lincoln Colling
    </footer>
  )
}



export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

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
    <Body open={open}>
      <NavBar open={open} setOpen={setOpen} />
      { open ? <></> :
        <>
      <Main>
        {children}
      </Main>
      <Footer />
      </>
      }
    </Body>
  </>
  )
}








const MobileNav = ({
  open,
  setOpen,
  items,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  items: typeof menuitems
}) => {


  return (

    <div
      style={{ height: "100%" }}
      className={`absolute top-0 left-0  h-full w-screen z-10 bg-gray-800 transform 
${open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md 

`}
    >
      <div className="flex flex-col mt-9 ml-4">
        {
          items.map((value, key) => {
            return (
              <NextLink
                key={key}
                href={value.link}
                className={`text-slate-100
text-xl font-normal my-4 

                  } ${value.text === "Home" ? "font-semibold text-white" : ""}`}
                onClick={() => {
                  setOpen(!open)
                }}
              >
                {value.text}
              </NextLink>
            )
          })
        }
      </div>
    </div>
  );
};

export const NavBar = (
  { open, setOpen }:
    { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; }
) => {
  return (

    <nav className={`flex md:flex-row px-4 py-4 h-20 max-auto items-center
${open ? "overflow-none z-10" : ""}
      `}>
      <NextLink href="/">
        <div className="flex md:flex-row flex-col h-12 w-auto items-center md:space-x-1">
          <span>Lincoln</span>
          <span><strong>Colling</strong></span>
        </div>
      </NextLink>
      <MobileNav open={open} setOpen={setOpen} items={menuitems} />
      <div className="w-full flex justify-end ">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-slate-300 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""
              }`}
          />
          <span
            className={`h-1 w-full bg-slate-300 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
              }`}
          />
          <span
            className={`h-1 w-full bg-slate-300 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
          />
        </div>

        <div className="hidden md:flex">
          {
            menuitems.map((value, key) => {
              return (
                <NavLink key={key} to={value.link}>{value.text}</NavLink>
              )
            })
          }
        </div>
      </div>
    </nav>




  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <a
      href={to}
      className={`px-4 transition ease-in-out duration-300 relative 
      ${router.asPath === to
          ? "text-purple-500"
          : "stroke  hover:text-purple-300"
        }`}
    >
      {children}
    </a>
  );
};



