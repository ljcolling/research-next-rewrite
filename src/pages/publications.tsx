import { type NextPage } from "next"

type Reference = {
  title: string,
  journal: string,
  year: number,
  doi: string,
  preprint?: string,
  abstract?: string,
  authors?: string,
  reference: string,
}




import references from "../references.json"
import { Dispatch, SetStateAction, useState } from "react"
import Link from "next/link"

/* const Abstract = ({ abstract }: { abstract: string }) => {

  const [showabstract, setShowabstract] = useState<boolean>(false)

  return (<>
      <button className="font-bold text-xs py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setShowabstract(!showabstract)}>Abstract</button>
      { !showabstract ? null : 
    <div className="shadow p-5 relative inset-0 right-0 left-0 z-10 bg-white">
      {abstract}
    </div>
      }
    </>
  )
}
*/

const Reference = ({ reference }: { reference: Reference }) => {

  const [showabstract, setShowabstract] = useState<boolean>(false)
  return (
    <div className="flex flex-row">
      <div className="pr-3"><strong>{reference.year}</strong>: </div>
      <div className="pl-3 text-left">
        <div>
          {reference.title} <i>in {reference.journal}</i> <a href={reference.doi} >[link]</a>
        </div>
        <div className="flex md:flex-row md:gap-8 gap-1 md:pt-2 flex-col md:justify-normal mx-auto justify-self-center">
          <button disabled={reference.abstract ? false : true}
            className={`md:w-40 w-auto font-semi-bold text-xs px-4 md:py-1 py-2 border-b border-t-white border-t border-blue-800 ${!reference.abstract ? "opacity-50" : "hover:border-t-blue-800"} ${showabstract ? "border-b-white border-t-blue-800" : ""}`}
            onClick={() => setShowabstract(!showabstract)} >
            Abstract
          </button>
          <button className="md:w-40 w-auto font-semi-bold text-xs px-4 md:py-1 py-2 border-b border-t-white border-t border-blue-800 hover:border-t-blue-800">
            Preprint
          </button>
          <button className="md:w-40 w-auto font-semi-bold text-xs px-4 md:py-1 py-2 border-b border-t-white border-t border-blue-800 hover:border-t-blue-800">
            Publisher&apos;s website
          </button>
        </div>

      </div>
      <article className={`${showabstract ? "transition-all duration-500 flex flex-1" : "hidden"} text-sm px-5 z-10 rounded transition-all my-5`}>
        {reference.abstract}
      </article>
    </div>

  )

}

interface PublicationButtonProps {
  state?: boolean; setState?: Dispatch<SetStateAction<boolean>>; url?: Url; disabled: boolean; children: string;
}


const ButtonWithState = ({ state, setState, disabled, children }: Omit<Required<PublicationButtonProps>, "url">) => {
  return (
    <button className={`w-40 font-semi-bold text-xs px-4 md:py-1 py-2 border-b border-t-white border-t border-blue-800 hover:border-t-blue-800 disabled:hover:border-t-white 
${state ? "border-t-blue-800 border-b-white" : ""}
`}
      onClick={() => setState(!state)}
      disabled={disabled}>
      {children}
    </button>
  )
}

const ButtonWithLink = ({ url, disabled, children }: PublicationButtonProps) => {
  return (
    <a href={url}>
    <button className={`w-40 font-semi-bold text-xs px-4 md:py-1 py-2 border-b border-t-white border-t border-blue-800 hover:border-t-blue-800 disabled:hover:border-t-white`}    
      disabled={disabled}>
      {children}
    </button>
    </a>
  )
}


/* <button className="md:w-40 w-auto font-semi-bold text-xs px-4 md:py-1 py-2 border-b border-t-white border-t border-blue-800 hover:border-t-blue-800 disabled:hover:border-t-white" 
  onClick={() => setShowabstract(!showabstract)} 
  disabled ={reference.abstract ? false : true}>
  abstract
</button> */

// TODO: This should be a grid instead of a flex block
const Reference2 = ({ reference }: { reference: Reference }) => {
  const [showabstract, setShowabstract] = useState<boolean>(false)



  return (<>
    <div className="flex flex-row w-[100%]">
      <div className="">
        {reference.year}
      </div>
      <div className="pl-5">
        {reference.title} <i>in {reference.journal}</i> <a href={reference.doi} >[link]</a>
        <div className="flex flex-row justify-between pt-2">
          <ButtonWithState state={showabstract} setState={setShowabstract} disabled={reference.abstract ? false : true}>
            abstract
          </ButtonWithState>
          <ButtonWithLink url={reference.doi} disabled={false}>
            preprint
          </ButtonWithLink>
          <button className="w-40 font-semi-bold text-xs px-4 md:py-1 py-2 border-b border-t-white border-t border-blue-800 hover:border-t-blue-800 disabled:hover:border-t-white">
            publisher&apos;s website
          </button>
        </div>
      </div>
    </div>
    <div className="mt-5 mb-5">
      <article className={`${showabstract ? "transition-all duration-500 flex flex-1" : "hidden"} text-sm transition-all pl-5 `}>
        {reference.abstract}
      </article>
    </div>
  </>

  )
}




const Publications: NextPage = () => {

  const ref1 = references[0] as Reference
  return (
    <article className="article">
      <h3 style={{ marginTop: 0 }}
        className="prose prose-neutral prose-base mx-auto">Publications</h3>
      {/*       <Reference2 reference={ref1} /> */}
      {references.map((ref, index) => {
        return <Reference2 key={index} reference={ref} />
      })}
    </article>
  )

}

export default Publications 
