import { type NextPage } from "next";
import { Info } from "../components/info"
import { Markdown } from "../components/markdown"

import bio from "../text/bio.md"
import news from "../text/news.md"
const Home: NextPage = () => {
  return (
    <>
      <Info />
      <div className="pt-10 md:container container md:mx-auto md:content-center text-justify pb-20 px-1">
        <article className="article pb-10">
          <Markdown>{bio}</Markdown>
        </article>
        <article className="article pt-10">
          <Markdown>{news}</Markdown>
        </article>
      </div>
    </>
  );
};

export default Home;
