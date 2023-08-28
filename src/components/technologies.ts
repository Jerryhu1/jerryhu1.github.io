
export interface Link {
  logoPath?: string
  link: string
}


interface Project {
  name: string;
  description: string;
  imgURL: string;
  links: Link[];
  technologies: Technology[];
}

interface Technology {
  name: string;
  iconURL: string;
}

const react: Technology = {
  name: "React",
  iconURL: "../static/img/react.png"
}

const typescript: Technology = {
  name: "Typescript",
  iconURL: "../static/img/typescript.png"
}

const websockets: Technology = {
  name: "Websockets",
  iconURL: "../static/img/websockets.png"
}

const golang: Technology = {
  name: "Go",
  iconURL: "../static/img/golang.png"
}

const redis: Technology = {
  name: "Redis",
  iconURL: "../static/img/redis.png"
}

export {react, typescript, websockets, golang, redis};
export type { Project, Technology };
