import { type NextPage } from "next";
import { Markdown } from "../components/markdown";
import software from "../text/software.md"

const Software: NextPage = () => {
  return (
    <div className="pt-10 md:container container md:mx-auto md:content-center text-justify pb-20 px-1">
      <article className="article">
        <Markdown>{software}</Markdown> 
 </article>
 </div>
  )
}
export  default Software

