import React from "react";
import {Link, Project as ProjectModel, Technology} from "./technologies";

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
    <div className="group project-item-card relative flex">
      <div className="project-item-content bg-primary-500/70 z-10 flex flex-col">
        <div className="pt-6 px-6">
          <div className="2lg:text-[100px] text-[50px] font-bold font-serif">
            {name}
          </div>
          <div>
            {description}
          </div>
        </div>
        <div className='px-6'>
          <h3 style={{marginTop: "2em"}}>Technologies used</h3>
          <ul>
            {technologies.map((v, i) => (
              <li key={v.name}>{v.name}</li>
            ))}
          </ul>
        </div>
        <div className='p-8 flex justify-center grow items-end '>
          {links.map(l => (
            <a href={l.link} target="_blank">
              <img src={l.logoPath} className="w-14 h-14"/>
            </a>
          ))}
        </div>

      </div>
      <img src={imgURL}
           className="w-full h-full grayscale group-hover:grayscale-0 transition-all ease-in duration-300"/>

    </div>
  )
}

export default Project