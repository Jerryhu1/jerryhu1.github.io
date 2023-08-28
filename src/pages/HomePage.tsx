import React, {ReactElement} from "react"
import {Project as ProjectType, golang, typescript, react, websockets, redis} from "../components/technologies";
import Project from "../components/Project";
import Contacts from "../components/Contacts";
import Typewriter from "../components/Typewriter";
import Journey from "../components/Journey";

const HomePage = () => {
  const projects: ProjectType[] = [
    {
      name: "Five words",
      description: "Five Words is a word-guessing game. Teams of 2 or more players compete to guess as many words on a card as possible\n" +
        "in 30 seconds. This project idea started during the COVID pandemic when many people started playing online versions of popular board games.",
      imgURL: "/five-words.png",
      technologies: [golang, typescript, react, websockets, redis],
      links: [{link: "https://github.com/Jerryhu1/five-words", logoPath: "/github-mark.svg"}]
    },
    {
      name: "Pool Party Panic",
      description: "Pool Party Panic is a fast-paced 3D management game. You are the Lifeguard of a pool and your task is to prevent your visitors from burning in the sun! " +
        "I worked on this project as a 3D artist. Together with 12 other students we worked on this game for three months. It went viral on Youtube with 10 million+ view and 200k downloads. " +
        "We were also nominated for a Dutch Game Award for Best Student Game Design.",
      imgURL: "/ppp.png",
      technologies: [{name: "Unity", iconURL: ""}, {name: "C#", iconURL: ""}, {name: "Maya", iconURL: ""}],
      links: [{link: "https://outlaws-studio.itch.io/poolpartypanic", logoPath: "/itchio.svg"}]

    },
    {
      name: "EvoMusicCompanion",
      description: "EvoMusicCompanion is the ML model I wrote for my master thesis. It uses an Evolutionary Algorithm with a N-gram model for generating music melodies which were trained using a dataset of popular modern melodies",
      imgURL: "//unsplash.it/500/500",
      technologies: [{name: "Python", iconURL: ""}, {name: "Jupyterlab", iconURL: ""}],
      links: [{link: "https://github.com/Jerryhu1/MasterThesis", logoPath: "/github-mark.svg"}]
    },
  ]

  // TODO: Find length dynamically
  const introText = [
    {content: <>Hello!</>, length: 6},
    {content: <>I am Jerry, a full-stack developer based in Rotterdam</>, length: 53},
    {content: <>Currently, I am working for bol.com</>, length: 35},
    {content: <>See some of my <span className="link-hover-effect">projects</span></>, length: 23},
    {content: <>Read my <span className="project-link-hover">blogs</span></>, length: 13},
    {content: <>Or just scroll down!</>, length: 20}
  ]

  const typewriter = (delay: number, seconds: number, length: number) => {
    return {

      background: "teal",
      animation: `typing ${seconds}s ${delay} steps(${length}) forwards`,
    }
  }

  const lettersPerSecond = 20
  let delayCumulative = 0.0
  const timings = introText.map((v, i) => {
    let delay = 0
    const time = v.length / lettersPerSecond
    if (i !== 0) {
      delay = delayCumulative
    }
    delayCumulative += time
    return {
      time: time,
      delay: delay
    }
  })
  const typewriterComponent = () => {
    return (
      <>
        {
          introText.map((v, i) => (
              <div className="typewriter">
                <h1 className="break-words" style={{
                  "--type-len": v.length,
                  "--type-time": `${timings[i].time}s`,
                  "--type-delay": `${timings[i].delay}s`,
                  width: "max-content"
                } as React.CSSProperties}>
                  {v.content}
                </h1>
              </div>
            )
          )
        }
      </>
    )
  }
  return (
    <div className="w-full">
      <div
        className="bg-primary-100 h-screen flex w-full font-serif items-center flex-col lg:flex-row flex-col-reverse justify-end pt-10 lg:p-0">
        <div
          className="typewriter-text flex p-10 md:p-16 w-full justify-center flex-col text-2xl text-grey-900 text-right">
          <Typewriter sentences={[
            "Hello!",
            "I am Jerry, a full-stack developer based in Rotterdam",
            "Currently, I work for Biller",
            <div>See some of my <span className="text-primary-500">projects</span></div>,
            <div>Read my <span className="text-primary-500">blogs</span></div>,
            "Or just scroll down",
          ]}/>
        </div>
        <div className="flex justify-center w-full">
          <img className="rounded-full" src="/profile.jpeg"/>
        </div>
      </div>
      <div className="flex flex-col items-center relative h-screen justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 md:w-2/3">
          <div className="bg-gray-100">
            <h1
              className="md:text-[100px] text-[50px] text-primary-500 p-6 text-center font-serif tracking-tighter">Projects</h1>
          </div>

          {projects.map(v => (
            <Project key={v.name} project={v} links={v.links}/>
          ))}
        </div>
      </div>
      <div className="h-screen">
        <Journey/>
      </div>
      <Contacts/>

    </div>
  )
}

export default HomePage