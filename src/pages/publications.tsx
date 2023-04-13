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
import { useState } from "react"

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
  return (<div className="relative border-t py-2">
    <div className="flex flex-row text-left py-2">
      <div className="pr-3"><strong>{reference.year}</strong>: </div>
      <div className="pl-3 text-left">
        <div>
          {reference.title} <i>in {reference.journal}</i> <a href={reference.doi} >[link]</a>
        </div>
          <div className="flex md:flex-row md:gap-8 gap-1 md:pt-2 flex-col md:justify-normal mx-auto justify-self-center">
            <button disabled={reference.abstract ? false : true}
            className={`md:w-40 font-bold text-xs px-4 md:py-1 bg-blue-500 text-white rounded py-2
${!reference.abstract ? "opacity-50" : "hover:bg-blue-700"}
`}
              onClick={() => setShowabstract(!showabstract)} >
              Abstract
            </button>
            <button className="md:w-40 w-auto font-bold text-xs px-4 md:py-1 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Preprint
            </button>
            <button className="md:w-40 w-auto font-bold text-xs px-4 md:py-1 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Publisher&apos;s website
            </button>
          </div>
      
      </div>

    </div>
{/*      {!showabstract ? null : */}
    <article className={`${showabstract ? "opacity-100 duration-200 py-5" : "max-h-[0px] opacity-0 duration-0 py-0"} 
shadow-lg bg-white text-sm px-5 z-10 rounded transition-all`}>
      {reference.abstract}
    </article>
{/*      } */}
  </div>

  )




}




const Publications: NextPage = () => {

  return (
    <div className="pt-10 md:container container md:mx-auto md:content-center text-justify pb-20 px-1 mx:auto">
      <article className="article">
        <h3 className="uppercase text-base font-medium">Publications</h3>
        {references.map((ref, index) => {
          return <Reference key={index} reference={ref} />
        })}
      </article>
    </div>
  )

}

export default Publications 
