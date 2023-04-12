import { type NextPage } from "next";
import { Info } from "../components/info"
import { Markdown } from "../components/markdown"


const Home: NextPage = () => {
  return (
    <>
      <Info />
      <div className="pt-10 md:container container md:mx-auto md:content-center text-justify pb-20 px-1">

  <article className="article">
          <h3 className="uppercase text-base font-medium">Bio</h3>
          <Markdown>
{`I’m a cognitive scientist based at the [University of
Sussex](https://profiles.sussex.ac.uk/p488921-lincoln-colling).
My work spans neuroscience, experimental psychology, and
philosophy and I try to investigate problems at multiple
levels and from multiple perspectives.


Before the University of Sussex, I held research positions at the [University
of Cambridge](https://www.neuroscience.cam.ac.uk/directory/), the [ARC Centre
of Excellence in Cognition and Its
Disorders](https://www.mq.edu.au/about/about-the-university/our-faculties/medicine-and-health-sciences/departments-and-centres/department-of-cognitive-science/alumni)
at Macquarie University (Sydney, Australia), and the [Donders Institute for
Brain, Behaviour, and Cognition](https://www.ru.nl/donders/) at Radboud
University (Nijmegen, Netherlands). I also held a lectureship in the School of
Psychology at the Australian Catholic University (Brisbane, Australia).  

I completed my PhD, titled Predicting the Actions of Other Agents, in
2012 in the Department of Cognitive Science at Macquarie University,
where I was affiliated with the Collective Cognition Research Group,
the Perception and Action Research Centre, and the Music, Sound, and
Performance Laboratory. Before this, I completed my Bachelor and
Master of Science degree in the Department of Psychology at the
University of Auckland.`}
</Markdown>
</article>


        <article className="article">
          <h4 className="uppercase text-sm pt-10">News</h4>
          <Markdown>{`
Recently published: *What’s in a Badge? A Computational Reproducibility
Investigation of the Open Data Badge Policy in One Issue of
Psychological Science* in **Psychological Science** 
[[link to publisher](https://journals.sagepub.com/doi/full/10.1177/09567976221140828)]
`}
          </Markdown>
        </article>
      </div>
    </>
  );
};

export default Home;
