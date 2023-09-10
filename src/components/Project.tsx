import React from "react";
import {Link, Project as ProjectModel, Technology} from "./technologies";
import Pill from "./Pill";

type Props = {
  project: ProjectModel
  links: Link[]
}


const Project = ({
                   project,
                   links,
                 }: Props) => {

  const {
    name,
    imgURL,
    technologies,
    description
  } = project
  return (
    <div className="group project-item-card relative flex items-center justify-center">
      <div className="project-item-content bg-primary-600/90 z-10 flex flex-col overflow-y-auto md:overflow-hidden">
        <div className="pt-6 px-6">
          <div className="2lg:text-[100px] text-[50px] font-bold font-serif">
            {name}
          </div>
          <div>
            {description}
          </div>
        </div>
        <div className='px-6'>
          <div className="flex gap-2 mt-4 flex-wrap">
            {technologies.map((v, i) => (
              <Pill key={v}>{v}</Pill>
            ))}
          </div>
        </div>
        <div className='p-8 flex justify-center grow items-end'>
          {links.map(l => (
            <a href={l.link} target="_blank">
              <img src={l.logoPath} className="w-11 h-11"/>
            </a>
          ))}
        </div>

      </div>
      <img src={imgURL}
           className="w-[500px] grayscale group-hover:grayscale-0 transition-all ease-in duration-300 aspect-square object-cover"/>

    </div>
  )
}

export default Project