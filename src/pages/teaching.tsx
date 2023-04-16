
import { type NextPage } from "next";
import { Markdown } from "../components/markdown";


import teaching from "../text/teaching.md";


const Teaching: NextPage = () => {
  return (
    <div className="pt-10 md:container container md:mx-auto md:content-center text-justify pb-20 px-1">
      <article className="article">
        <Markdown>{teaching}</Markdown> 
 </article>
 </div>
  )
}

export default Teaching;
