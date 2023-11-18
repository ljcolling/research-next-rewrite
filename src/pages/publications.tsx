import { type NextPage } from "next"

import { useState } from "react";
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




/* type ArrayElement<Type> = Type extends Array<infer Item> ? Item : Type

type Reference = NonNullable<Partial<ArrayElement<typeof references>>>

let ref: Reference */

const ReferenceDisplay = ({ reference }: { reference: Reference}) => {
 
   const [showabstract, setShowabstract] = useState(false);

  return (<>
    <div className="flex flex-row pt-5 pb-2">
      <div className="">{reference.year}</div>
      <div className="flex flex-col grow">
        <div className="pl-5">{reference.title} <i>in {reference.journal}</i></div>
        <div className="flex md:flex-row justify-center mx-auto md:gap-30 gap-4 md:mx-0 pt-2">
          <button
            className={`btn py-2` }
            disabled={!!!reference.abstract}
            onClick={() => setShowabstract(!showabstract)}>
            Abstract
          </button>
          {/* <a href={reference.preprint ? reference.preprint : ""}><button className={` btn ${reference.preprint ? "bg-blue-50" : "bg-red-50"} `} disabled={!!!reference.preprint} > Preprint</button></a> */}
          <button className={`btn py-2 `} disabled={!!!reference.doi}>
            <a href={reference.doi}> Link to paper</a> </button>
        </div>
        {(!!reference.abstract && showabstract) &&
          <div>
            <article className="article">
              <h4>Abstract</h4>
              {reference.abstract}
            </article>
          </div>
        }
      </div>
    </div>
  </>

  )
}





const Publications: NextPage = () => (
  <article className="article">
    <h3 style={{ marginTop: 0 }}
      className="prose prose-neutral prose-base mx-auto">Publications</h3>
    {references.map((ref, index) => <ReferenceDisplay key={index} reference={ref} />)}
  </article>
)

export default Publications 
