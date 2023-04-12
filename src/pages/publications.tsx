import { type NextPage } from "next"

interface Reference {
  title: string,
  journal: string,
  year: number,
  doi: string,
  preprint?: string,
  abstract?: string,
  authors?: string,
  reference: string,
}

interface ReferenceProps {
  reference: Reference
}


import referenceslist from "../references.json";
const sorted_keys = referenceslist.map(x => x.year).sort()
const references = (referenceslist as Array<Reference>)



const Reference  = ({reference}: ReferenceProps) => {
  return (
    <>
    <div className="flex flex-row text-left py-2">
      <div className="pr-3"><strong>{reference.year}</strong>: </div>
      <div className="pl-3 text-left">
          {reference.title} <i>in {reference.journal}</i> <a href={reference.doi} >[link]</a> 

        </div>
    </div>
      {!reference.abstract ? null : <div>
        {/* <h4>Abstract</h4>  */}
        {/* {reference.abstract} */}
      </div> 
      }
      {/* <div dangerouslySetInnerHTML={{__html: reference.reference}} 
        className="text-sm hanging"
      /> */}

    </>
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
