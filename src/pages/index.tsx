import { type NextPage } from "next";
import { Info } from "../components/info"
import { Markdown } from "../components/markdown"

import bio from "../text/bio.md"
import news from "../text/news.md"
const Home: NextPage = () => {
  return (
    <>
      <Info />
      <article className="article pb-5">
        <Markdown>{bio}</Markdown>
      </article>
      <article className="article pt-5">
        <Markdown>{news}</Markdown>
      </article>
    </>
  );
};

export default Home;
