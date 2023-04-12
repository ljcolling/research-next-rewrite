
import { type NextPage } from "next";
import { Markdown } from "../components/markdown";
const Teaching: NextPage = () => {
  return (
    <div className="pt-10 md:container container md:mx-auto md:content-center text-justify pb-20 px-1">
      <article className="article">
        <h3 className="uppercase text-base font-medium">Teaching</h3>
        <Markdown>{`

I primarily teach courses on R and statistics. All my course materials are
available freely online.

#### Psychology as a Science

Psychology as a Science is the first year introductory research methods course
at the University of Sussex.

Topics covered include:


The lecture slides and handouts are accessible [here](https://paas.netlify.app/)

#### Advanced Research Methods: Bayesian Statistics

ARM Bayesian Statistics is a Masters level course on Bayesian statistics. This
course is primarily focused on understanding the foundations of Bayesian
statistics and of Bayes factors. 

This course is taught using the
[Bayesplay](https://bayesplay.github.io/bayesplay/) R Package. You can also read
more about Bayesplay under [software](software)

The course book is available [here](https://bayescourse.netlify.app/)

#### Advanced Research Methods for Cognitive Neuroscience: Matlab

ARM Matlab is a Masters level introductory course on Matlab. The aim of this
course is to familiarise students with the basics of Matlab and PsychToolBox.

The course website is available [here](https://matlab.mindsci.net/)


 `}</Markdown> 
 </article>
 </div>
  )
}

export default Teaching;
