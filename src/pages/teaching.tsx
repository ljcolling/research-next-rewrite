
import { type NextPage } from "next";
import { Markdown } from "../components/markdown";


import teaching from "../text/teaching.md";


const Teaching: NextPage = () => {
  return (
      <article className="article">
        <Markdown>{teaching}</Markdown> 
 </article>

  )
}

export default Teaching;
