
import { type NextPage } from "next";
import { Markdown } from "../components/markdown";


import teaching from "../text/test.md";

teaching

const Test: NextPage = () => {
  return (
      <article className="article">
        <Markdown>{teaching}</Markdown> 
 </article>

  )
}

export default Test;
