import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    year: 2021,
    title: "Front-end developer - Infosys",
    duration: "2 Years 2 Months",
    details:
      "Executed project, focused on designing and implementing a user-friendly platform for clients to raise tickets and monitor progress details.HTML for content structuring, CSS for interface design, and JavaScript alongside React.js for interactivity.GitHub for efficient codebase management.",
  },
  {
    year: 2024,
    title: "Freelance",
    duration: "2 Months",
    details:
      "Developed and hosted a website on go-daddy.com using HTML5, CSS3, JS according to Client requirement. ",
  },
];
const Work = (props) => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
