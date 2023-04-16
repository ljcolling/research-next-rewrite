import { type NextPage } from "next";
import { Markdown } from "../components/markdown";
import summary from "../text/research.md"

const Research: NextPage = () => {
  return (<>
      <article className="article">
        <Markdown>{summary}</Markdown>
      </article>
  </>)
}


export default Research;
