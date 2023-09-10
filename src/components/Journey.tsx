const Journey = () => {
  const experience = [
    {
      time: "2022 ‑ present",
      title: "Full-stack Engineer",
      company: "Biller",
      description: "Developing an innovative Buy Now Pay Later payment method. Launched an new version of the payment page, implemented new features in the\n" +
        "Seller Portal. Implemented a design system and component library.",
      technologies: ["Python", "React", "Typescript", "TailwindCSS", "Next.js", "Django"]
    },
    {
      time: "2020 ‑ 2022",
      company: "bol.com",
      title: "Software Engineer",
      description: "Designed and implemented features for the digital asset management platform of the largest webshop in the Netherlands. Mainly a security scanning pipeline that used GCP products such as Cloud Run. Launched a new internal interface for customizing the search engine of bol.com",
      technologies: ["Go", "React", "Typescript", "Next.js", "GCP", "BigQuery"]
    },
    {
      time: "2018 ‑ 2020",
      title: "Back-end Engineer",
      description: "Development in C# .NET in several CMS's such as Umbraco and Sitecore. Worked in a scrum team consisting of designers, developers and external stakeholders. ",
      technologies: ["C#", ".NET", "Umbraco", "Sitecore"]
    },
    {
      time: "feb 2017 - jun 2017",
      title: "Graduate Intern",
      description: "Researched and wrote a bachelor thesis about Reactive Systems. Learned about software architecture, microservices and concurrency. ",
      technologies: ["C#", ".NET", "Umbraco", "Sitecore"]
    },
    {
      time: "sep 2015 ‑ jan 2016",
      title: "Intern",
      description: "Went abroad to Xiamen, China and worked together with students of Xiamen University on a hotel & e-commerce website written in PHP and Joomla.",
      technologies: ["C#", ".NET", "Umbraco", "Sitecore"]
    },
  ]

  return (
    <div className="w-full flex md:gap-20 flex-col md:flex-row p-10 md:p-20">
      <div className="">
        <p className="text-[50px] font-serif">Experience</p>
        <a href="https://www.linkedin.com/in/jerry-hu/" target="_blank"  className="w-fit block">
          <img className="w-11" src="/linkedin.png" alt="linkedin"/>
        </a>
      </div>
      <div className="md:w-1/2 flex flex-col gap-10">
        {experience.map(e => (
          <div className="flex flex-col md:flex-row">
            <span className="text-grey-600  w-1/4">
              {e.time}
            </span>
            <div className="md:w-3/4">
              <div className="font-bold">{e.title}</div>
              <div className="font-bold text-grey-700">{e.company}</div>
              <div>
                {e.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Journey