import React, {ReactElement, useEffect, useRef, useState} from "react"
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

  useEffect(() => {
    window.addEventListener("scroll", ev => {
      window.scrollY
      window.scrollTo()
    })
  }, [])

  const projectRef = useRef(null)
  const homeRef = useRef(null)
  const contactRef = useRef(null)
  const experienceRef = useRef(null)

  const [currentScrollPosition, setCurrentScrollPosition] = useState(window.scrollY)

  return (
    <div className="w-full">
      <div ref={homeRef}
           className="bg-primary-100 h-screen flex w-full font-serif items-center flex-col lg:flex-row flex-col-reverse justify-center">
        <div
          className="typewriter-text flex p-10 md:p-16 w-full justify-center lg:items-end flex-col text-2xl text-grey-900 text-right container">
          <Typewriter sentences={[
            "Hello!",
            "I am Jerry, a full-stack developer based in Rotterdam",
            "Currently, I work for Biller",
            <div>See some of my <span className="text-primary-500">projects</span></div>,
            <div>Read my <span className="text-primary-500">blogs</span></div>,
            "Or just scroll down",
          ]}/>
        </div>
        <div className="w-full">
          <img className="rounded-full mx-auto lg:mx-0" src="/profile.jpeg"/>
        </div>
      </div>
      <div ref={projectRef} className="flex flex-col items-center relative h-full md:h-screen justify-center container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-10 md:p-20">
            <span
              className="md:text-[70px] text-[50px] text-center font-serif tracking-tighter">Projects</span>
            <a href="https://github.com/Jerryhu1" target="_blank" className="w-fit block">
              <img className="w-11" src="/github-mark.svg" alt="linkedin"/>
            </a>
          </div>

          {projects.map(v => (
            <Project key={v.name} project={v} links={v.links}/>
          ))}
        </div>
      </div>
      <div ref={experienceRef} className="h-full md:h-screen">
        <Journey/>
      </div>
      <div ref={contactRef}>
        <Contacts/>
      </div>
    </div>
  )
}

export default HomePage