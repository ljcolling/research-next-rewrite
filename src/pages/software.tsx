import { type NextPage } from "next";
import { Markdown } from "../components/markdown";
import software from "../text/software.md"

const Software: NextPage = () => {
  return (
    <article className="article">
      <Markdown>{software}</Markdown>
    </article>

  )
}
export default Software

