import React from "react";
import {Technology} from "./technologies";

const Project = ({
                   name,
                   imgURL,
                   technologies,
                   description
                 }: { name: string, imgURL: string, technologies: Technology[], description: string }) => {
  return (
    <div className="">
      <img src={imgURL} className=""/>
      {/*<div className="project-item-content">*/}
      {/*  <div className="project-item-header">*/}
      {/*    <h1>{name}</h1>*/}
      {/*  </div>*/}
      {/*  <span>*/}
      {/*    {description}*/}
      {/*  </span>*/}
      {/*  <h3 style={{marginTop: "2em"}}>Technologies used</h3>*/}
      {/*  <ul>*/}
      {/*    {technologies.map((v, i) => (*/}
      {/*      <li key={v.name}>{v.name}</li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  )
}

export default Project